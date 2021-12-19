export const initialState = {
  content: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_CONTENT":
      return {
        ...state,
        content: [],
      };

    default:
      return state;
  }
};

export default reducer;
