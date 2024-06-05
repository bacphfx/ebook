import axiosClient from "../../utils/axios";

const postAPI = {
  getAllData: (categoryId, page) => {
    const url = `/posts?post_category_id=${categoryId}&page=${page}`;
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/post/${id}`;
    return axiosClient.get(url);
  },
};

export default postAPI;
