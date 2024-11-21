import { FC } from "react";
import { LoadMoreBtnProps } from "./LoadMore.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMorePhotos }) => {
  return (
    <button onClick={loadMorePhotos} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
