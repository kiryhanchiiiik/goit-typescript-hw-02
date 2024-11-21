import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";

const INITIAL_VALUES = {
  searchPhoto: "",
};

type SearchBarProps = {
  onSearch: (searchPhoto: string) => void;
};

type FormValues = {
  searchPhoto: string;
};

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    if (values.searchPhoto.trim() === "") {
      toast.error("Need to enter text for image search!");
      return;
    }

    onSearch(values.searchPhoto);
    resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
        <Form className={css.form}>
          <Field
            name="searchPhoto"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
