import axiosClient from "../../utils/axios";

const postAPI = {
  getAllData: (page) => {
    const url = `/posts?page=${page}`;
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/post/${id}`;
    return axiosClient.get(url);
  },
};

export default postAPI;
