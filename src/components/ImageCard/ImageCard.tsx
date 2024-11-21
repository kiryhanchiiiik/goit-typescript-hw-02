import { FC } from "react";
import { Photo } from "../../App.types";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ photo, onImageClick }) => {
  return (
    <div className={css.container}>
      <img
        onClick={() => onImageClick(photo.urls.regular, photo.alt_description)}
        className={css.photo}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
