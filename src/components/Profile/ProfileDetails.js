import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import style from "./ProfileDetails.module.css";

const ProfileDetalis = () => {

    const userCtx = useContext(AuthContext);
    const user = userCtx.userIsLoggedIn
    

    return <div className={style.container}>
        <h2>Profile</h2>
        <p>User Name : {user.userName}</p>
        <p>Email : {user.email}</p>
        <p>SignUp Date : {user.signUpDate}</p>
    </div>
}

export default ProfileDetalis;