import axiosClient from "../../utils/axios";

const postAPI = {
  getAllData: (page) => {
    const url = `/posts?page=${page}&limit=6`;
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/post/${id}`;
    return axiosClient.get(url);
  },
};

export default postAPI;
