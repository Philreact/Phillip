import { initialState } from "./Store";

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      localStorage.removeItem("newsappToken");
      localStorage.setItem("newsappToken", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true
      };
    case "USER_LOADED":
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      };

    case "LOGOUT":
      localStorage.removeItem("newsappToken");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: {
          name: ""
        }
      };
    case "LOGIN_ERROR":
      localStorage.removeItem("newsappToken");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: {
          name: ""
        }
      };

    default:
      return state;
  }
};
