import axiosClient from "../../utils/axios";

const SubscribeAPI = {
  getAllData: () => {
    const url = `/subscriptions`;
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  postSubscribe: (body, token) => {
    const url = "/subscription-users";
    return axiosClient.post(url, body, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default SubscribeAPI;
