import UserAPI from "../../components/api/userAPI";

export const setPurchasedBooks = (books) => ({
  type: "SET_PURCHASED_BOOKS",
  payload: books,
});

export const fetchPurchasedBooks = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const response = await UserAPI.getPurchasedBooks(token);
      const data = await response?.data.data.map((i) => i?.book_id);
      dispatch(setPurchasedBooks(data));
    } catch (error) {
      console.error("Failed to fetch purchased books", error);
    }
  };
};
