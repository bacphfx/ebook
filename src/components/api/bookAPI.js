import axiosClient from "../../utils/axios";

const BookAPI = {
  getBooksByCategory: (categoryId) => {
    const url = `/books?category_id=${categoryId}`;
    return axiosClient.get(url);
  },

  getDetailData: (id, token) => {
    const url = `/books/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default BookAPI;
