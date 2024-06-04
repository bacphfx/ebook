import axiosClient from "../../utils/axios";

const CategoriesAPI = {
  getAllData: (page) => {
    const url = `/categories?page=${page}`;
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
};

export default CategoriesAPI;
