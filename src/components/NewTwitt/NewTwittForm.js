import { useContext, useRef } from "react";
import Button from "../UI/Button";
import FormCard from "../UI/FormCard";
import AuthContext from "../../context/auth-context";
import TwittsContext from "../../context/twitts-context";
import { useNavigate } from "react-router-dom";

const NewTwittForm = (props) => {

    const newTwittRef = useRef();
    const authCtx = useContext(AuthContext);
    const twittCtx = useContext(TwittsContext);
    const currUser = authCtx.userIsLoggedIn;
    const nav = useNavigate();

    const newTwittHandler = (event) => {
        event.preventDefault();

        const enteredNewTwitt = newTwittRef.current.value;
        const currDate = new Date();
        const currDateToString = currDate.toUTCString();

        const newTwitt = {
            id: Math.random(),
            userName: currUser.userName,
            email: currUser.email,
            content: enteredNewTwitt,
            date: currDateToString
        };

        twittCtx.addTwitt(newTwitt);
        nav("/", { replace: true });
    }

    return (
        <FormCard>
            <h2>New Twitt</h2>
            <label htmlFor="new-twitt">Share what's on your mind</label>
            <textarea id="new-twitt" rows={10} ref={newTwittRef}></textarea>
            <Button onClick={newTwittHandler}>Post</Button>
        </FormCard>
    )
}

export default NewTwittForm;