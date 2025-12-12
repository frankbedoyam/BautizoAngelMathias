import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import images from './images';
import './gallery.css';

const BautizoGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
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
                  className="gallery-image"
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