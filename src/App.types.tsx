export type Photo = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type Image = {
  url: string;
  alt: string;
};

export interface UnsplashApiResponse {
  results: Photo[];
}
