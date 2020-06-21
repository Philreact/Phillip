import React, { useReducer, createContext, useEffect, useState } from "react";
export const StoreContext = createContext({});
import projects from "../../Json/projects.json";
import { reducer } from "./cases";
import Alert from "../../actions/Alert";

export const initialState = {
  isAuthenticated: false,
  token: null,
  user: {
    name: "",
  },
  projects: projects,
};

interface Props {
  children: React.ReactNode;
}

const Store = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Alert></Alert>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
