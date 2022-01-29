import React, { useState, useContext, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [currentContent, setCurrentContent] = useState([]);
  return (
    <StateContext.Provider
      value={{
        currentContent,
        setCurrentContent,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
