import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  usersList: [],
  addNewUser: (newUser) => {},
  userIsLoggedIn: "",
  findUser: (userEmail) => {},
  logInUser: (user) => {},
  logOutUser: () => {},
});

const initialUserValue = () => {
  const currentUser = localStorage.getItem("user");
  return currentUser ? JSON.parse(currentUser) : "";
};

const initialUsersList = () => {
  const allUsers = localStorage.getItem("users");
  return allUsers ? JSON.parse(allUsers) : [];
};

export const AuthContextProvider = (props) => {
  const [usersList, setUsersList] = useState(initialUsersList);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(initialUserValue);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userIsLoggedIn));
  }, [userIsLoggedIn]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersList));
  }, [usersList]);

  const addNewUserHandler = (newUser) => {
    setUsersList((prev) => [newUser, ...prev]);
  };

  const findUserHandler = (userEmail) => {
    return usersList.find((user) => user.email === userEmail);
  };

  const logInUserHandler = (user) => {
    setUserIsLoggedIn(user);
  };

  const logOutUserHandler = () => {
    setUserIsLoggedIn("");
  };

  const context = {
    usersList: usersList,
    addNewUser: addNewUserHandler,
    userIsLoggedIn: userIsLoggedIn,
    findUser: findUserHandler,
    logInUser: logInUserHandler,
    logOutUser: logOutUserHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
