import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <p style={{ color: "red" }}>
      Failed to load images. Please try again later.
    </p>
  );
};

export default ErrorMessage;
