import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import images from './images';
import './gallery.css'; // ✅ Importa tu CSS personalizado

const BautizoGallery = () => {
  return (
    <div className="gallery-container">
      {/* Fondo de globos */}
      <div className="balloons-background">
        <div className="balloon" style={{ left: '10%', animationDelay: '0s' }}>🎈</div>
        <div className="balloon" style={{ left: '30%', animationDelay: '2s' }}>🎈</div>
        <div className="balloon" style={{ left: '50%', animationDelay: '4s' }}>🎈</div>
        <div className="balloon" style={{ left: '70%', animationDelay: '6s' }}>🎈</div>
        <div className="balloon" style={{ left: '85%', animationDelay: '8s' }}>🎈</div>
      </div>

      {/* Contenido principal */}
      <div className="gallery-content">
        <h1>Galería Bautizo Angel Mathias</h1>

        <Gallery className="gallery-grid">
          {images.map((img, i) => (
            <Item
              key={i}
              original={img.src}
              thumbnail={img.src}
              width={img.width}
              height={img.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.src}
                  alt={`Foto ${i + 1}`}
                  className="gallery-image" // ✅ Usa clase en lugar de estilos inline
                />
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </div>
  );
};

export default BautizoGallery;