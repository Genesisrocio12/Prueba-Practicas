import React, { useState } from 'react';
import logoImage from './image/TechResources.png';

const ImageProcessor = ({ onNavigate }) => {
  const [backgroundRemoval, setBackgroundRemoval] = useState(true);
  const [resize, setResize] = useState(false);
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');

  return (
    <div className="processor-app-background">
      {/* Header */}
      <header className="processor-header">
        <div className="processor-container processor-header-content">
          <div className="processor-logo-section">
            <img src={logoImage} alt="TechResources Logo" className="processor-logo-image" />
          </div>
          <nav className="processor-navigation">
            <button onClick={() => onNavigate('home')} className="processor-nav-link">
              Inicio
            </button>
            <button onClick={() => onNavigate('procesador')} className="processor-nav-link processor-nav-active">
              Procesador
            </button>
            <button onClick={() => onNavigate('ayuda')} className="processor-nav-link">
              Ayuda
            </button>
            <button onClick={() => onNavigate('contacto')} className="processor-nav-link">
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="processor-main">
        <div className="processor-container">
          {/* Page Title */}
          <div className="processor-page-header">
            <h1 className="processor-page-title">ImageProcessor</h1>
          </div>

          {/* Main Title */}
          <div className="processor-title-section">
            <h2 className="processor-main-title">Procesador de Imágenes</h2>
            <p className="processor-main-subtitle">
              Sube múltiples imágenes o archivos ZIP y configura las opciones de procesamiento
            </p>
          </div>

          {/* Content Grid */}
          <div className="processor-content-grid">
            {/* Upload Section */}
            <div className="processor-upload-section">
              <div className="processor-upload-area">
                <div className="processor-upload-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <h3 className="processor-upload-title">Arrastra tus imágenes aquí</h3>
                <p className="processor-upload-subtitle">o haz clic para seleccionar archivos</p>
                <button className="processor-select-files-btn">
                  Seleccionar Archivos
                </button>
              </div>
            </div>

            {/* Options Section */}
            <div className="processor-options-section">
              <h3 className="processor-options-title">Opciones de Procesamiento</h3>
              
              {/* Background Removal Option */}
              <div className="processor-option-card">
                <div className="processor-option-header">
                  <h4 className="processor-option-title">Eliminar Fondo</h4>
                  <div 
                    className={`processor-toggle ${backgroundRemoval ? 'processor-toggle-active' : ''}`}
                    onClick={() => setBackgroundRemoval(!backgroundRemoval)}
                  >
                    <div className="processor-toggle-slider"></div>
                  </div>
                </div>
                <p className="processor-option-description">
                  Remueve automáticamente el fondo
                </p>
              </div>

              {/* Resize Option */}
              <div className="processor-option-card">
                <div className="processor-option-header">
                  <h4 className="processor-option-title">Redimensionar</h4>
                  <div 
                    className={`processor-toggle ${resize ? 'processor-toggle-active' : ''}`}
                    onClick={() => setResize(!resize)}
                  >
                    <div className="processor-toggle-slider"></div>
                  </div>
                </div>
                <p className="processor-option-description">
                  Ajusta las dimensiones de la imagen
                </p>
              </div>

              {/* Custom Dimensions */}
              {resize && (
                <div className="processor-dimensions-card">
                  <h4 className="processor-dimensions-title">Dimensiones personalizadas</h4>
                  <div className="processor-dimensions-inputs">
                    <div className="processor-input-group">
                      <label className="processor-input-label">Ancho (px):</label>
                      <input
                        type="text"
                        className="processor-dimension-input"
                        value={customWidth}
                        onChange={(e) => setCustomWidth(e.target.value)}
                        placeholder=""
                      />
                    </div>
                    <div className="processor-input-group">
                      <label className="processor-input-label">Altura (px):</label>
                      <input
                        type="text"
                        className="processor-dimension-input"
                        value={customHeight}
                        onChange={(e) => setCustomHeight(e.target.value)}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <button className="processor-process-btn">
                    Procesar Imagenes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          {(backgroundRemoval || resize) && (
            <div className="processor-results-section">
              <div className="processor-results-header">
                <div className="processor-results-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7"/>
                    <path d="M3 7L12 2L21 7"/>
                    <path d="M8 12H16"/>
                    <path d="M8 16H12"/>
                  </svg>
                </div>
                <h3 className="processor-results-title">Imagenes Procesadas</h3>
              </div>
              <div className="processor-results-content">
                <div className="processor-download-section">
                  <button className="processor-download-btn">
                    Descarga
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ImageProcessor;