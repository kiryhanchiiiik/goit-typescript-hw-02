import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../App.types";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onImageClick }) => {
  return (
    <ul className={css.list}>
      {photos !== null &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard photo={photo} onImageClick={onImageClick} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
