import axiosClient from "../../utils/axios";

const BannerAPI = {
  getAllData: () => {
    const url = `/banners`;
    return axiosClient.get(url);
  },
};

export default BannerAPI;
