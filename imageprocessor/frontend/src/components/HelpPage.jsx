import React, { useState } from 'react';
import logoImage from './image/TechResources.png';

const HelpPage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('primerosPasos');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'primerosPasos':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Primeros Pasos</h2>
            <p className="help-page-content-description">
              ImageProcessor es una herramienta fácil de usar para procesar múltiples imágenes. Sigue esta guía paso a paso para comenzar:
            </p>
            
            <div className="help-page-steps-container">
              <div className="help-page-step-card">
                <div className="help-page-step-number">1</div>
                <div className="help-page-step-content">
                  <h3 className="help-page-step-title">Cargar Imágenes</h3>
                  <p className="help-page-step-description">
                    Arrastra tus imágenes a la zona de carga o haz clic para seleccionarlas. 
                    Puedes subir múltiples imágenes o archivos ZIP sin límite de cantidad.
                  </p>
                </div>
              </div>

              <div className="help-page-step-card">
                <div className="help-page-step-number">2</div>
                <div className="help-page-step-content">
                  <h3 className="help-page-step-title">Configurar Opciones</h3>
                  <p className="help-page-step-description">
                    Activa los switches según tus necesidades: "Eliminar Fondo" para remover 
                    fondos automáticamente o "Redimensionar" para ajustar dimensiones.
                  </p>
                </div>
              </div>

              <div className="help-page-step-card">
                <div className="help-page-step-number">3</div>
                <div className="help-page-step-content">
                  <h3 className="help-page-step-title">Personalizar Dimensiones</h3>
                  <p className="help-page-step-description">
                    Si activaste redimensionamiento, especifica las dimensiones deseadas 
                    o usa los presets comunes como 800x600 o 1920x1080.
                  </p>
                </div>
              </div>

              <div className="help-page-step-card">
                <div className="help-page-step-number">4</div>
                <div className="help-page-step-content">
                  <h3 className="help-page-step-title">Procesar y Descargar</h3>
                  <p className="help-page-step-description">
                    Haz clic en "Procesar Imágenes" y espera a que termine. Después da clic en 
                    descargar y las imágenes se descargarán automáticamente en formato PNG optimizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="help-page-info-box">
              <h4>Importante:</h4>
              <p>
                Todas las imágenes procesadas se exportan en formato PNG optimizado, reduciendo el 
                peso hasta un 60% sin perder calidad visual.
              </p>
            </div>
          </div>
        );

      case 'funcionalidades':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Funcionalidades Principales</h2>
            <p className="help-page-content-description">
              ImageProcessor ofrece dos funciones principales que puedes usar por separado o en combinación:
            </p>

            <div className="help-page-features-grid">
              <div className="help-page-feature-item">
                <div className="help-page-feature-icon-bg">
                  <svg className="help-page-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <div>
                  <h3 className="help-page-feature-title">Eliminación de Fondo</h3>
                  <p className="help-page-feature-desc">
                    Remueve automáticamente el fondo de cualquier imagen usando tecnología 
                    AI avanzada. Perfecto para productos, retratos y diseños.
                  </p>
                </div>
              </div>

              <div className="help-page-feature-item">
                <div className="help-page-feature-icon-bg">
                  <svg className="help-page-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="14" y="14" width="4" height="6" rx="1"/>
                    <rect x="6" y="4" width="4" height="6" rx="1"/>
                    <path d="m22 2-1.5 1.5L16 8"/>
                    <path d="M4 22l1.5-1.5L10 16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="help-page-feature-title">Redimensionamiento</h3>
                  <p className="help-page-feature-desc">
                    Ajusta las dimensiones exactas de tus imágenes. Soporte para 
                    formatos cuadrados y rectangulares con preservación de calidad.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="help-page-section-subtitle">Control de Operaciones</h3>
            <p className="help-page-section-text">
              Los switches independientes te permiten controlar exactamente qué operaciones aplicar:
            </p>

            <div className="help-page-operation-cards">
              <div className="help-page-operation-card">
                <h3 className="help-page-operation-title">Solo Eliminar Fondo</h3>
                <p className="help-page-operation-desc">
                  Activa únicamente el switch "Eliminar Fondo". Las imágenes mantendrán sus 
                  dimensiones originales pero con fondo transparente.
                </p>
              </div>

              <div className="help-page-operation-card">
                <h3 className="help-page-operation-title">Solo Redimensionar</h3>
                <p className="help-page-operation-desc">
                  Activa únicamente el switch "Redimensionar". Las imágenes cambiarán de 
                  tamaño pero mantendrán su fondo original.
                </p>
              </div>

              <div className="help-page-operation-card">
                <h3 className="help-page-operation-title">Ambas Operaciones</h3>
                <p className="help-page-operation-desc">
                  Activa ambos switches. Primero se eliminará el fondo y luego se redimensionará, 
                  obteniendo imágenes con fondo transparente y dimensiones exactas.
                </p>
              </div>
            </div>
          </div>
        );

      case 'formatosSoportados':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Formatos Soportados</h2>
            <p className="help-page-content-description">
              ImageProcessor acepta una amplia variedad de formatos de entrada y siempre produce 
              archivos PNG optimizados.
            </p>

            <h3 className="help-page-section-subtitle">Formatos de Entrada Aceptados</h3>
            <div className="help-page-format-tags">
              <span className="help-page-format-tag">JPEG</span>
              <span className="help-page-format-tag">JPG</span>
              <span className="help-page-format-tag">PNG</span>
              <span className="help-page-format-tag">GIF</span>
              <span className="help-page-format-tag">WEBP</span>
              <span className="help-page-format-tag">BMP</span>
              <span className="help-page-format-tag">TIFF</span>
              <span className="help-page-format-tag">SVG</span>
              <span className="help-page-format-tag">HEIC</span>
              <span className="help-page-format-tag">RAW</span>
              <span className="help-page-format-tag">ZIP</span>
            </div>

            <h3 className="help-page-section-subtitle">Formato de Salida</h3>
            <div className="help-page-output-format">
              <h4 className="help-page-output-title">PNG Optimizado</h4>
              <p className="help-page-output-desc">
                Todas las imágenes procesadas se exportan exclusivamente en formato PNG 
                con optimización avanzada que reduce el peso del archivo hasta un 60% 
                manteniendo la máxima calidad visual.
              </p>
            </div>

            <h3 className="help-page-section-subtitle">Archivos ZIP</h3>
            <p className="help-page-zip-desc">
              Puedes subir archivos ZIP conteniendo múltiples imágenes. El sistema extraerá 
              automáticamente todas las imágenes válidas y las procesará junto con el resto.
            </p>

            <div className="help-page-limits-box">
              <h4>Límites:</h4>
              <p>
                No hay límite en la cantidad de imágenes que puedes procesar. El único límite es 
                la capacidad de tu dispositivo y conexión a internet.
              </p>
            </div>
          </div>
        );

      case 'preguntasFrecuentes':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Preguntas Frecuentes</h2>
            
            <div className="help-page-faq-list">
              <div className="help-page-faq-item">
                <button className="help-page-faq-question" onClick={() => toggleFaq(0)}>
                  ¿Cuántas imágenes puedo procesar a la vez?
                  <span className="help-page-faq-icon">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                <div className={`help-page-faq-answer ${openFaq === 0 ? 'show' : ''}`}>
                  No hay límite establecido en la cantidad de imágenes. Puedes procesar desde una sola 
                  imagen hasta cientos simultáneamente. El único límite es la capacidad de tu dispositivo.
                </div>
              </div>

              <div className="help-page-faq-item">
                <button className="help-page-faq-question" onClick={() => toggleFaq(1)}>
                  ¿Por qué solo exporta en formato PNG?
                  <span className="help-page-faq-icon">{openFaq === 1 ? '−' : '+'}</span>
                </button>
                <div className={`help-page-faq-answer ${openFaq === 1 ? 'show' : ''}`}>
                  PNG es el formato ideal para web porque soporta transparencia (crucial para fondos eliminados), 
                  mantiene alta calidad y permite optimización avanzada. Nuestro sistema optimiza automáticamente 
                  los PNG reduciendo su peso sin perder calidad.
                </div>
              </div>

              <div className="help-page-faq-item">
                <button className="help-page-faq-question" onClick={() => toggleFaq(2)}>
                  ¿Puedo usar ambas funciones al mismo tiempo?
                  <span className="help-page-faq-icon">{openFaq === 2 ? '−' : '+'}</span>
                </button>
                <div className={`help-page-faq-answer ${openFaq === 2 ? 'show' : ''}`}>
                  Sí, puedes activar ambos switches simultáneamente. El sistema aplicará primero la 
                  eliminación de fondo y luego el redimensionamiento, preservando la transparencia 
                  durante todo el proceso.
                </div>
              </div>

              <div className="help-page-faq-item">
                <button className="help-page-faq-question" onClick={() => toggleFaq(3)}>
                  ¿Qué pasa si algunas imágenes fallan al procesarse?
                  <span className="help-page-faq-icon">{openFaq === 3 ? '−' : '+'}</span>
                </button>
                <div className={`help-page-faq-answer ${openFaq === 3 ? 'show' : ''}`}>
                  El sistema procesará exitosamente todas las imágenes válidas y te notificará sobre 
                  cualquier archivo que no pudo procesarse, proporcionando detalles sobre la causa del error.
                </div>
              </div>
            </div>
          </div>
        );

      case 'solucionProblemas':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Solución de Problemas</h2>
            
            <h3 className="help-page-section-subtitle">Problemas Comunes y Soluciones</h3>
            
            <div className="help-page-problem-list">
              <div className="help-page-problem-item">
                <h3 className="help-page-problem-title">Las imágenes no se cargan</h3>
                <p className="help-page-problem-solution">
                  Verifica que los archivos sean imágenes válidas o archivos ZIP. Asegúrate de tener 
                  una conexión estable a internet y suficiente espacio en tu dispositivo.
                </p>
              </div>

              <div className="help-page-problem-item">
                <h3 className="help-page-problem-title">El procesamiento es lento</h3>
                <p className="help-page-problem-solution">
                  El tiempo de procesamiento depende del número de imágenes, su tamaño y la potencia 
                  de tu dispositivo. Para archivos muy grandes, considera procesarlos en lotes más pequeños.
                </p>
              </div>

              <div className="help-page-problem-item">
                <h3 className="help-page-problem-title">La descarga no inicia</h3>
                <p className="help-page-problem-solution">
                  Verifica que tu navegador permite descargas automáticas. Si procesas múltiples imágenes, 
                  la descarga será un archivo ZIP que puede tardar unos segundos en generarse.
                </p>
              </div>

              <div className="help-page-problem-item">
                <h3 className="help-page-problem-title">Calidad de eliminación de fondo</h3>
                <p className="help-page-problem-solution">
                  La calidad de eliminación de fondo varía según la complejidad de la imagen. Funciona 
                  mejor con sujetos claramente definidos y fondos contrastantes.
                </p>
              </div>
            </div>

            <div className="help-page-alert-info">
              <h4>Navegadores Recomendados:</h4>
              <p>Para la mejor experiencia, usa Chrome, Firefox, Safari o Edge en sus versiones más recientes.</p>
            </div>
          </div>
        );

      case 'consejosTrucos':
        return (
          <div className="help-page-content">
            <h2 className="help-page-content-title">Consejos y Trucos</h2>
            
            <h3 className="help-page-section-subtitle">Optimiza tus Resultados</h3>
            
            <div className="help-page-tips-list">
              <div className="help-page-tip-item">
                <h3 className="help-page-tip-title">Para Mejor Eliminación de Fondo</h3>
                <p className="help-page-tip-desc">
                  Usa imágenes con sujetos bien definidos y fondos contrastantes. Evita fondos 
                  con patrones complejos o colores similares al sujeto principal.
                </p>
              </div>

              <div className="help-page-tip-item">
                <h3 className="help-page-tip-title">Para Redimensionamiento Óptimo</h3>
                <p className="help-page-tip-desc">
                  Mantén las proporciones originales cuando sea posible para evitar distorsión. 
                  Usa los presets comunes para resultados consistentes.
                </p>
              </div>

              <div className="help-page-tip-item">
                <h3 className="help-page-tip-title">Procesamiento Masivo Eficiente</h3>
                <p className="help-page-tip-desc">
                  Organiza tus imágenes en carpetas y usa archivos ZIP para cargar múltiples 
                  imágenes relacionadas de una vez.
                </p>
              </div>

              <div className="help-page-tip-item">
                <h3 className="help-page-tip-title">Optimización para Web</h3>
                <p className="help-page-tip-desc">
                  Los PNG optimizados son perfectos para web. Si necesitas archivos aún más pequeños, 
                  considera usar las dimensiones más pequeñas posibles sin perder calidad visual.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen app-background">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-section">
            <img 
              src={logoImage}
              alt="TechRessources Logo"
              className="logo-image"
            />
          </div>
          <nav className="navigation">
            <button onClick={() => onNavigate('home')} className="nav-link">
              Inicio
            </button>
            <button onClick={() => onNavigate('procesador')} className="nav-link">
              Procesador
            </button>
            <button onClick={() => onNavigate('ayuda')} className="nav-link nav-active">
              Ayuda
            </button>
            <button onClick={() => onNavigate('contacto')} className="nav-link">
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="help-page-main">
        <div className="help-page-container">
          <div className="help-page-brand">
            <h3 className="help-page-brand-title">ImageProcessor</h3>
          </div>
          
          <div className="help-page-header">
            <h1 className="help-page-title">Centro de Ayuda</h1>
            <p className="help-page-subtitle">
              Encuentra toda la información que necesitas para sacar el máximo provecho de ImageProcessor
            </p>
          </div>

          <div className="help-page-layout">
            {/* Sidebar Navigation */}
            <div className="help-page-sidebar">
              <h3 className="help-page-sidebar-title">Navegación</h3>
              <nav className="help-page-sidebar-nav">
                <button 
                  onClick={() => setActiveSection('primerosPasos')}
                  className={`help-page-sidebar-btn ${activeSection === 'primerosPasos' ? 'active' : ''}`}
                >
                  Primeros Pasos
                </button>
                <button 
                  onClick={() => setActiveSection('funcionalidades')}
                  className={`help-page-sidebar-btn ${activeSection === 'funcionalidades' ? 'active' : ''}`}
                >
                  Funcionalidades
                </button>
                <button 
                  onClick={() => setActiveSection('formatosSoportados')}
                  className={`help-page-sidebar-btn ${activeSection === 'formatosSoportados' ? 'active' : ''}`}
                >
                  Formatos Soportados
                </button>
                <button 
                  onClick={() => setActiveSection('preguntasFrecuentes')}
                  className={`help-page-sidebar-btn ${activeSection === 'preguntasFrecuentes' ? 'active' : ''}`}
                >
                  Preguntas Frecuentes
                </button>
                <button 
                  onClick={() => setActiveSection('solucionProblemas')}
                  className={`help-page-sidebar-btn ${activeSection === 'solucionProblemas' ? 'active' : ''}`}
                >
                  Solución de Problemas
                </button>
                <button 
                  onClick={() => setActiveSection('consejosTrucos')}
                  className={`help-page-sidebar-btn ${activeSection === 'consejosTrucos' ? 'active' : ''}`}
                >
                  Consejos y Trucos
                </button>
              </nav>
            </div>

            {/* Content Area */}
            <div className="help-page-content-area">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;