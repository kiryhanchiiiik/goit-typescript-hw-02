import { Photo } from "../../App.types";
export interface ImageCardProps {
  photo: Photo;
  onImageClick: (imageUrl: string, imageAlt: string) => void;
}
