import { createContext, useState } from "react";

const AuthContext = createContext({
  usersList: [],
  addNewUser: (newUser) => {},
  userIsLoggedIn: "",
  findUser: (userEmail) => {},
  logInUser: (user) => {},
  logOutUser: () => {},
});

const initail = () => {
  return [];
};

export const AuthContextProvider = (props) => {
  const [usersList, setUsersList] = useState(initail);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState("");

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
