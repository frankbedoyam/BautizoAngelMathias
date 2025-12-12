import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import images from './images';

const BautizoGallery = () => {
  return (
    <Gallery>
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
              alt={`Foto ${i+1}`}
              style={{ margin: "10px", borderRadius: "8px", cursor: "pointer", maxWidth: "200px" }}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default BautizoGallery;