const initialState = {
  user: {},
};

const ReducerSession = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      console.log("user: ", action.data);

      const stateLogin = [...state.user];
      stateLogin.user = action.data;
      return stateLogin;

    case "DELETE_SESSION":
      console.log("user: ", action.data);

      const stateLogout = [...state.user];
      stateLogout.user = action.data;
      return stateLogout;

    default:
      return state;
  }
};

export default ReducerSession;
