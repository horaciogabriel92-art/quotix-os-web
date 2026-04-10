#!/usr/bin/env node
/**
 * Script de desarrollo robusto para Quotix Landing
 * Maneja reinicios automáticos, puertos ocupados, y procesos zombie
 */

import { spawn } from 'child_process';
import { createServer } from 'net';

const PORT = 4321;
const MAX_RETRIES = 3;

// Check if port is available
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

// Kill process on port (Windows)
async function killProcessOnPort(port) {
  try {
    const { exec } = await import('child_process');
    const util = await import('util');
    const execAsync = util.promisify(exec);
    
    // Find and kill node processes
    await execAsync('taskkill /F /IM node.exe 2>nul').catch(() => {});
    console.log('🧹 Procesos anteriores limpiados');
  } catch (e) {
    // Ignore errors
  }
}

// Start dev server
async function startServer(retries = 0) {
  console.log(`\n🚀 Iniciando Quotix Landing (intento ${retries + 1}/${MAX_RETRIES})...\n`);
  
  const available = await isPortAvailable(PORT);
  if (!available) {
    console.log(`⚠️ Puerto ${PORT} ocupado. Liberando...`);
    await killProcessOnPort(PORT);
    await new Promise(r => setTimeout(r, 1000));
  }
  
  const proc = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });
  
  proc.on('exit', (code) => {
    if (code !== 0 && retries < MAX_RETRIES - 1) {
      console.log(`\n⚠️ Servidor cerrado. Reintentando...\n`);
      setTimeout(() => startServer(retries + 1), 2000);
    } else {
      console.log('\n👋 Servidor detenido');
      process.exit(code);
    }
  });
  
  // Handle Ctrl+C
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Deteniendo servidor...');
    proc.kill('SIGINT');
  });
}

startServer();
