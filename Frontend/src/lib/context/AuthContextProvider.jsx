import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext({
  authState: null,
  setLogin: () => {},
  setLogout: () => {},
  
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (props) => {
  // Initialize state with values from localStorage
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    id: localStorage.getItem("id"),
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  });

  const setLogin = ({ token, username, id, isLoggedIn }) => {
    setAuthState({
      token,
      username,
      id,
      isLoggedIn,
    });

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("id", id);
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  };

  const setLogout = (callback) => {
    setAuthState({
      token: null,
      username: null,
      id: null,
      isLoggedIn: false,
    });

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("isLoggedIn");

    if (callback) {
      callback();
    }
  };

  return (
    <AuthContext.Provider value={{ authState, setLogin, setLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
