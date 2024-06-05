import React from "react";
import PDFViewer from "../../components/pdf/PDFViewer";

const BookReader = () => {
  const url = "http://103.186.65.188/storage/books/ta_test_1717381637";
  return (
    <div>
      <h1>BookReader</h1>
      <PDFViewer url={url} />
    </div>
  );
};

export default BookReader;
