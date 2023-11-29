import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import FormCard from "../UI/FormCard";
import { useContext, useRef, useState } from "react";
import AuthContext from "../context/auth-context";

const LogInForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState();
  const nav = useNavigate();

  const logInSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = authCtx.findUser(email);
    // const userPass = authCtx.usersList.find(user => user.password === password);
    if (!user) {
      setError("email not valid");
      return;
    }

    if (user.password !== password) {
      setError("password is invalid");
      return;
    }

    if (error === "") {
      authCtx.logInUser(user);
      nav("/", { replace: true });
    }
  };

  return (
    <FormCard onSubmit={logInSubmitHandler}>
      <h2>LogIn</h2>
      <label htmlFor="email">Email :</label>
      <input type="email" id="email" ref={emailRef} required />
      <label htmlFor="password">Password :</label>
      <input type="password" id="password" ref={passwordRef} required />
      <Button type="submit">LogIn</Button>
      <div>
        <small>Don't have an account?</small>
        <Link to="/sign-up">SignUp</Link>
      </div>
      {error && <p>{error}</p>}
    </FormCard>
  );
};

export default LogInForm;
