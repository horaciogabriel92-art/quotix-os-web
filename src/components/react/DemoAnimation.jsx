import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Plane, 
  Search, 
  Bell, 
  Moon, 
  Download, 
  Printer,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  Box,
  FileText,
  Users,
  ShoppingCart,
  FolderOpen,
  Settings,
  MoreVertical,
  RotateCcw
} from 'lucide-react';

const PNR_TEXT = `RP/DZOUY2100/
 1  UX 046 T 16MAY 6 MVDMAD DK1  1220 0510  17MAY  E  0 789 M
    SEE RTSVC
 2  UX 045 N 01JUN 1 MADMVD DK1  2355 0735  02JUN  E  0 789 M
    SEE RTSVC`;

function App() {
  const [phase, setPhase] = useState(1); // 1 = input, 2 = cards, 3 = pdf
  const [typedText, setTypedText] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [scrollingPdf, setScrollingPdf] = useState(false);

  useEffect(() => {
    let timeoutId;
    
    const runSequence = () => {
      // Reset
      setPhase(1);
      setTypedText("");
      setIsDetecting(false);
      setScrollingPdf(false);

      // Phase 1: Typing
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= PNR_TEXT.length) {
          setTypedText(PNR_TEXT.substring(0, charIndex));
          charIndex += 2; // type speed
        } else {
          clearInterval(typeInterval);
          // Termina de tipear, muestra cargando "Analizando GDS..."
          setIsDetecting(true);
          
          timeoutId = setTimeout(() => {
            setIsDetecting(false);
            setPhase(2); // "Aparecen los vuelos y la pantalla se ajusta..."
            
            timeoutId = setTimeout(() => {
              // Da 6 segundos exactos para leer los vuelos y el globo explicativo
              setPhase(3); 
              
              timeoutId = setTimeout(() => {
                setScrollingPdf(true); // Arranca el auto-scroll
                
                timeoutId = setTimeout(() => {
                  // Re-inicia luego de terminar de scrollear el PDF y dar tiempo extra al final de la hoja.
                  
                  // Para evitar el corte abrupto, pasamos a Phase 4. Esto hace que 'visible' del PDF se apague, pero sin resetear la posicion de la barra de scroll aun.
                  setPhase(4);
                  
                  timeoutId = setTimeout(() => {
                    // Ahora sí, después de 600ms que el modal ya es invisible, reseteamos el loop
                    runSequence();
                  }, 600);
                  
                }, 16000);
              }, 2000);
            }, 6000);
          }, 1000);
        }
      }, 50);
    };

    runSequence();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Explanation Bubbles based on phase */}
      {phase === 1 && (
        <div className="explanation-bubble bottom" style={{ top: '150px', left: '50%', transform: 'translateX(-50%)' }}>
          <div className="bubble-icon"><Sparkles size={16}/></div>
          Pegas el PNR en crudo desde tu GDS (Amadeus, Sabre o Galileo).
        </div>
      )}
      
      {phase === 2 && (
        <div className="explanation-bubble right" style={{ top: '350px', left: '120px' }}>
          <div className="bubble-icon"><Plane size={16}/></div>
          El sistema lee y estructura al instante los vuelos, fechas, escalas y horarios. ¡Sin cargarlos a mano!
        </div>
      )}

      {/* Main Frame */}
      <div className={`app-frame zoom-phase-${phase}`}>
      {/* Sidebar Mock */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon"><Plane size={20} /></div>
          <div className="sidebar-logo-text">Trip Conecta<br/><span style={{fontSize: '0.65rem', color: '#64748b', fontWeight: 'normal'}}>B2B System</span></div>
        </div>
        
        <div className="sidebar-menu-item"><LayoutDashboard size={18}/> Dashboard</div>
        <div className="sidebar-menu-item"><Box size={18}/> Catálogo</div>
        <div className="sidebar-menu-item active"><FileText size={18}/> Cotizaciones</div>
        <div className="sidebar-menu-item"><Users size={18}/> Clientes</div>
        <div className="sidebar-menu-item"><ShoppingCart size={18}/> Mis Ventas</div>
        <div className="sidebar-menu-item"><FolderOpen size={18}/> Mis Documentos</div>
        
        <div style={{marginTop: 'auto'}}>
          <div className="sidebar-menu-item"><Settings size={18}/> Configuración</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="search-bar">
            <Search size={16}/> Buscar paquetes, ventas, clientes...
          </div>
          <div className="header-right">
            <div style={{backgroundColor:'#1e293b', padding: '8px', borderRadius: '50%', color: '#60a5fa'}}><Moon size={18}/></div>
            <div style={{color: '#94a3b8', position: 'relative'}}>
              <Bell size={20}/>
              <span style={{position:'absolute', top:-2, right:-2, backgroundColor:'#ef4444', width:8, height:8, borderRadius:'50%'}}></span>
            </div>
            <div className="user-profile">
              <div style={{textAlign: 'right'}}>
                <div style={{color: 'white', fontSize: '0.85rem', fontWeight: 600}}>Vendedor Test</div>
                <div style={{color: '#94a3b8', fontSize: '0.7rem'}}>VENDEDOR</div>
              </div>
              <div style={{backgroundColor: '#10b981', color: 'white', width: 36, height: 36, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>VE</div>
            </div>
          </div>
        </header>

        <div className="content-body">
          <h1 className="page-title">Nueva Cotización Manual</h1>
          <p className="page-subtitle">Crea una cotización personalizada paso a paso</p>
          
          <div className="stepper">
            <div className="step completed"><div className="step-icon"><CheckCircle2 size={16}/></div> Cliente <span style={{color: '#334155', margin: '0 10px'}}>-</span></div>
            <div className="step active"><div className="step-icon">2</div> Vuelos <span style={{color: '#334155', margin: '0 10px'}}>-</span></div>
            <div className="step"><div className="step-icon">3</div> Hospedaje <span style={{color: '#334155', margin: '0 10px'}}>-</span></div>
            <div className="step"><div className="step-icon">4</div> Itinerario <span style={{color: '#334155', margin: '0 10px'}}>-</span></div>
            <div className="step"><div className="step-icon">5</div> Precios</div>
          </div>

          <div className="tabs">
            <div className="tab active">Pegar desde Amadeus</div>
            <div className="tab">Ingresar Manual</div>
          </div>

          <div className="box-container">
            <div className="box-header">
              <Sparkles size={18} color="#3b82f6"/> Código Amadeus
            </div>
            
            {phase === 1 && (
              <p className="box-desc">Pega aquí el itinerario de Amadeus (formato RP/). El sistema detectará automáticamente los vuelos.</p>
            )}

            <div className={`inner-scroll-wrapper ${phase > 1 ? 'scrolled' : ''}`}>
              <div className={`amadeus-input-wrapper ${phase > 1 ? 'collapsed' : ''}`}>
                <div className="amadeus-code">{typedText}{(phase === 1 && typedText.length < PNR_TEXT.length) && <span style={{animation: 'blink 1s infinite'}}>|</span>}</div>
                {phase > 1 && (
                  <div style={{position: 'absolute', right: '1rem', bottom: '1rem', width: 24, height: 24, borderRadius: '50%', backgroundColor: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem'}}>
                    10
                  </div>
                )}
              </div>

              {phase === 1 && (
                <button className={`detect-btn ${isDetecting ? 'loading' : ''}`}>
                  <Sparkles size={16}/> 
                  {isDetecting ? 'Analizando GDS...' : 'Detectar Vuelos Automáticamente'}
                </button>
              )}

              {phase > 1 && (
                <>
                  <div className="detect-btn" style={{backgroundColor: '#022c22', border: '1px solid #059669', cursor: 'default'}}>
                    <Sparkles size={16}/> Detectar Vuelos Automáticamente
                  </div>

                <div className="flights-result">
                  <div className="flights-header">
                    <CheckCircle2 size={16}/> 2 vuelo(s) detectado(s)
                  </div>
                  
                  {/* Flight 1 */}
                  <div className="flight-card">
                    <div className="flight-top">
                      <div className="flight-number">UX 046</div>
                      <div className="flight-class">Clase T</div>
                    </div>
                    <div className="flight-route">
                      <div className="flight-point">
                        <div className="flight-code">MVD</div>
                        <div>12:20</div>
                        <div className="flight-time">vie, 15 may</div>
                      </div>
                      
                      <div className="flight-line">
                        <Plane size={16} className="icon"/>
                      </div>

                      <div className="flight-point end">
                        <div className="flight-code">MAD</div>
                        <div>05:10</div>
                        <div className="flight-time">sáb, 16 may</div>
                      </div>
                    </div>
                  </div>

                  {/* Flight 2 */}
                  <div className="flight-card" style={{animationDelay: '0.2s'}}>
                    <div className="flight-top">
                      <div className="flight-number">UX 045</div>
                      <div className="flight-class">Clase N</div>
                    </div>
                    <div className="flight-route">
                      <div className="flight-point">
                        <div className="flight-code">MAD</div>
                        <div>23:55</div>
                        <div className="flight-time">dom, 31 may</div>
                      </div>
                      
                      <div className="flight-line">
                        <Plane size={16} className="icon"/>
                      </div>

                      <div className="flight-point end">
                        <div className="flight-code">MVD</div>
                        <div>07:35</div>
                        <div className="flight-time">lun, 01 jun</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button style={{backgroundColor: '#1e293b', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '8px', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <ChevronLeft size={16}/> Anterior
          </button>
          
          <div style={{color: '#94a3b8', fontSize: '0.85rem', alignSelf: 'center'}}>Paso 2 de 5</div>
          
          <button className={`btn-next ${(phase === 2 && !isDetecting) ? 'pulse' : ''}`}>
             Siguiente <ChevronRight size={16}/>
          </button>
        </div>
      </main>

      {/* PDF Modal UI */}
      <div className={`pdf-modal-overlay ${phase === 3 ? 'visible' : ''}`}>
        {phase === 3 && (
          <div className="explanation-bubble top" style={{ position: 'absolute', bottom: '80px', right: '120px', zIndex: 1000 }}>
            <div className="bubble-icon"><FileText size={16}/></div>
            Con solo 1 clic, obtienes un PDF profesional y de alta conversión, listo para enviar a tus pasajeros.
          </div>
        )}
        <div className="pdf-window">
          <div className="pdf-header">
            <span style={{fontWeight: 600}}>Vista Previa: COT-COT-2026-43709.pdf</span>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <button className="pdf-dl-btn"><Download size={14}/> Descargar</button>
              <span style={{cursor: 'pointer'}}>✕</span>
            </div>
          </div>
          
          <div className="pdf-toolbar">
            <MoreVertical size={16}/>
            <span style={{fontSize: '0.85rem'}}>4d3608e8-b6e9-4d32-b...</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#334155', padding: '2px 8px', borderRadius: '4px'}}>
              <span>1 / 3</span>
            </div>
            <div style={{display:'flex', gap:'1rem'}}>
              <span>-</span> 100% <span>+</span>
            </div>
            <Printer size={16}/>
            <RotateCcw size={16}/>
          </div>

          <div className="pdf-viewer-area">
            <div className="pdf-document-wrapper" style={{width: '100%', height: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center'}}>
              <div className={`pdf-document ${scrollingPdf ? 'scrolling' : ''}`}>
                
                {/* PDF Content */}
                <div className="pdf-doc-header">
                  <div>
                    <div className="pdf-doc-title">Vendedor Test</div>
                    <div style={{fontSize: '0.85rem', color: '#64748b'}}>Viajes y Turismo • tripconecta.com</div>
                  </div>
                  <div className="pdf-doc-meta">
                    <div className="pdf-doc-ref">COT-2026-43709</div>
                    <div>Fecha: 28/3/2026</div>
                    <div>Válida hasta: 4/4/2026</div>
                  </div>
                </div>

                <div className="pdf-row">
                  <div className="pdf-box">
                    <div className="pdf-box-title">PASAJERO 1 (TITULAR)</div>
                    <div style={{display: 'flex', gap: '2rem'}}>
                      <span style={{color: '#64748b', fontSize: '0.85rem'}}>Nombre:</span>
                      <span style={{fontWeight: 'bold'}}>Nicky Minaj</span>
                    </div>
                  </div>
                  <div className="pdf-box">
                    <div className="pdf-box-title">CONFIGURACIÓN DEL VIAJE</div>
                    <div style={{display: 'flex', gap: '2rem'}}>
                      <span style={{color: '#64748b', fontSize: '0.85rem'}}>Pasajeros:</span>
                      <span style={{fontWeight: 'bold'}}>2</span>
                    </div>
                    <div style={{display: 'flex', gap: '2rem', marginTop: '0.2rem'}}>
                      <span style={{color: '#64748b', fontSize: '0.85rem'}}>Fecha Salida:</span>
                      <span style={{fontWeight: 'bold'}}>9/10/2026</span>
                    </div>
                  </div>
                </div>

                <div className="pdf-section-title">PAQUETE TURÍSTICO</div>
                <div className="pdf-package-card">
                  <div className="pdf-package-img">
                     {/* Placeholder img color */}
                     <div style={{width:'100%', height:'100%', borderRadius: 4, backgroundImage: 'url("https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&h=120&fit=crop")', backgroundSize: 'cover'}}/>
                  </div>
                  <div>
                    <div className="pdf-package-title">Viaje a Madrid - Madrid 7 días</div>
                    <div style={{display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.85rem'}}>
                      <div><span style={{color: '#64748b'}}>Destino:</span> <b>MONTEVIDEO</b></div>
                      <div><span style={{color: '#64748b'}}>Duración:</span> <b>No especificada</b></div>
                    </div>
                  </div>
                </div>

                <div className="pdf-section-title">VUELOS</div>
                
                {/* PDF Flight 1 */}
                <div className="pdf-flight-card">
                  <div className="pdf-flight-top">
                    <span>MONTEVIDEO 'MADRID</span>
                    <span className="pdf-flight-tag">AV UX078</span>
                  </div>
                  <div className="pdf-flight-times">
                    <div>
                      <div>09:30:00</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>2026-10-10</div>
                      <div style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>MVD</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>MONTEVIDEO</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '200px'}}>
                      <div style={{flex: 1, height: '2px', backgroundColor: '#34d399'}}></div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <div>20:45:00</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>&nbsp;</div>
                      <div style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>MAD</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>MADRID</div>
                    </div>
                  </div>
                  <div className="pdf-flight-bottom">
                    <div><b>Aerolínea:</b> AIR EUROPA</div>
                    <div><b>Clase:</b> </div>
                    <div><b>Vuelo:</b> UX078</div>
                  </div>
                </div>

                {/* PDF Flight 2 */}
                <div className="pdf-flight-card">
                  <div className="pdf-flight-top">
                    <span>MADRID 'MONTEVIDEO</span>
                    <span className="pdf-flight-tag">AV UX087</span>
                  </div>
                  <div className="pdf-flight-times">
                    <div>
                      <div>10:20:00</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>2026-10-17</div>
                      <div style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>MAD</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>MADRID</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', width: '200px'}}>
                      <div style={{flex: 1, height: '2px', backgroundColor: '#34d399'}}></div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <div>21:30:00</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>&nbsp;</div>
                      <div style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>MVD</div>
                      <div style={{fontSize: '0.65rem', fontWeight: 'normal', color: '#64748b'}}>MONTEVIDEO</div>
                    </div>
                  </div>
                  <div className="pdf-flight-bottom">
                    <div><b>Aerolínea:</b> AIR EUROPA</div>
                    <div><b>Clase:</b> </div>
                    <div><b>Vuelo:</b> ux087</div>
                  </div>
                </div>

                <div className="pdf-section-title">PASAJEROS (2)</div>
                <table className="pdf-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Documento</th>
                      <th>Fecha Nac.</th>
                      <th>Nacionalidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nicky Minaj</td>
                      <td>3242442</td>
                      <td>1990-10-10</td>
                      <td>Uruguay</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Laura Maria</td>
                      <td>12389712398</td>
                      <td>1990-10-10</td>
                      <td>Argentina</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="pdf-section-title" style={{marginTop: '2.5rem', marginBottom: '0.5rem'}}>DETALLE DE PRECIOS</div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '2px solid #e2e8f0', paddingTop: '1rem'}}>
                  <div style={{color: '#64748b', fontSize: '0.85rem'}}>
                    Incluye tasas e impuestos.
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <div style={{color: '#0f766e', fontSize: '2.2rem', fontWeight: 'bold'}}>$3.980</div>
                    <div style={{color: '#64748b', fontSize: '0.85rem'}}>Total a pagar</div>
                  </div>
                </div>

                <div style={{marginTop: '4rem', color: 'transparent'}}>Padding for scroll</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
