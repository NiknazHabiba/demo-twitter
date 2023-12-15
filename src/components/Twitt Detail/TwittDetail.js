import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TwittsContext from "../../context/twitts-context";
import style from "./TwittDetail.module.css";
import AuthContext from "../../context/auth-context";

const TwittDetail = () => {
  const currTwittId = useParams();
  const twittCtx = useContext(TwittsContext);
  const currTwitt = twittCtx.findTwitt(currTwittId.twittId);
  const userCtx = useContext(AuthContext);
  const userIsLoggedIn = userCtx.userIsLoggedIn;
  const twittAuthor = userIsLoggedIn.email === currTwitt.email;

  const nav = useNavigate();

  const removeTwittHandler = () => {
    twittCtx.deleteTwitt(currTwitt);
    nav("/", { replace: true });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2>{currTwitt.userName} said :</h2>
        <p>{currTwitt.content}</p>
        <small>{currTwitt.date}</small>
      </div>
      {twittAuthor ? (
        <div className={style.btn}>
          <button onClick={removeTwittHandler}>Remove Twitt</button>
        </div>
      ) : (
        <div className={style.email}>
          <p>
            Contact {currTwitt.userName} : {currTwitt.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default TwittDetail;
