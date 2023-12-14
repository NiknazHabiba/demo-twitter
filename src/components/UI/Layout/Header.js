import { useContext } from "react";
import style from "./Header.module.css";
import AuthContext from "../../../context/auth-context";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const userIsLoggedIn = authCtx.userIsLoggedIn;

  const logOutHandler = () => {
    authCtx.logOutUser();
  };

  return (
    <header className={style.header}>
      <Link to="/">Twitter</Link>
      <nav>
        <ul>
          {!userIsLoggedIn && (
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
          )}
          {!userIsLoggedIn && (
            <li>
              <Link to="/log-in">LogIn</Link>
            </li>
          )}
          {userIsLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {userIsLoggedIn && (
            <div className={style.btn}>
              <Button onClick={logOutHandler}>LogOut</Button>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
