import axiosClient from "../../utils/axios";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  getPurchasedBooks: (token) => {
    const url = "/user-books?limit=999";
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  postRegister: (body) => {
    const url = `/register`;
    return axiosClient.post(url, body);
  },

  postLogin: (body) => {
    const url = `/login`;
    return axiosClient.post(url, body);
  },

  postLogout: (token) => {
    const url = "/logout";
    return axiosClient.post(url, null, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export default UserAPI;
