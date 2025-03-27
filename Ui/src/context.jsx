import React, { createContext, useReducer, useContext } from "react";
import { actions } from "./constants/actions";

const initialState = {
  user: {
    details: null,
    token: null,
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
const AppContext = createContext({ initialState });

// App Provider Component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);
