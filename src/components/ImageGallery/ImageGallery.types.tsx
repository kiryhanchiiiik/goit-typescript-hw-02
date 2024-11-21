import { Photo } from "../../App.types";
export interface ImageGalleryProps {
  photos: Photo[] | null;
  onImageClick: (imageUrl: string, imageAlt: string) => void;
}
