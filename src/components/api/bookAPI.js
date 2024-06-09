import axiosClient from "../../utils/axios";

const BookAPI = {
  getBooksByCategory: (categoryId) => {
    const url = `/books?category_id=${categoryId}`;
    return axiosClient.get(url);
  },

  getBookDetail: (id, token) => {
    const url = `/books/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  postBuyBook: (body, token) => {
    const url = "/user-books";
    return axiosClient.post(url, body, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default BookAPI;
