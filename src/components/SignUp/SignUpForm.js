import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import FormCard from "../UI/FormCard";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../context/auth-context";

const SignUpForm = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const currDate = new Date();
  const currDateToString = currDate.toUTCString();

  const signUpSubmitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPass = confirmPasswordRef.current.value;

    if (email === authCtx.usersList.forEach((user) => user.email)) {
      setError("This email has been already used.");
      return;
    }

    if (!email.includes("@")) {
      setError("Your email should include @.");
    }

    if (password.trim().length < 7) {
      setError("Your password should have more than 7 characters.");
      return;
    }

    if (password !== confirmPass) {
      setError("Your password fields should be the same.");
      return;
    }

    if (error === "") {
      authCtx.addNewUser({
        id: Math.random(),
        userName: userName,
        email: email,
        password: password,
        signUpDate : currDateToString,
      });
      nav("/log-in", { replace: true });
    }

  };

  return (
    <FormCard onSubmit={signUpSubmitHandler}>
      <h2>SignUp</h2>
      <label htmlFor="email">Email :</label>
      <input type="email" id="email" ref={emailRef} required />
      <label htmlFor="username">User Name :</label>
      <input type="text" id="username" ref={userNameRef} required />
      <label htmlFor="password">Password :</label>
      <input type="password" id="password" ref={passwordRef} required />
      <label htmlFor="confirmpass">Confirm Password :</label>
      <input
        type="password"
        id="confirmpass"
        ref={confirmPasswordRef}
        required
      />
      <Button type="submit">SignUp</Button>
      <div>
        <small>Already Have an account?</small>
        <Link to="/log-in">LogIn</Link>
      </div>
      {error && <p>{error}</p>}
    </FormCard>
  );
};

export default SignUpForm;
