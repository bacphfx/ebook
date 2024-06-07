import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Nav from "../../components/browse/Nav";
import BookList from "../../components/browse/BookList";

const Category = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const categoryName = location.state?.categoryName;

  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(categoryName);
  }, [categoryName]);

  return (
    <>
      <Nav />
      <BookList title={title} data={categoryId} number={10} />
    </>
  );
};

export default Category;
