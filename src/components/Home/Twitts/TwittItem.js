import { Link } from "react-router-dom";
import style from "./TwittItem.module.css";

const TwittItem = (props) => {
  return (
    <div className={style.container}>
      <h2>{props.twitt.userName}</h2>
      <p className={style.content}>{props.twitt.content}</p>
      <div className={style["twitt-item-footer"]}>
        <small>{props.twitt.date}</small>
        <small><Link to={`/${props.twitt.id}`}>View Twitt</Link></small>
      </div>
    </div>
  );
};

export default TwittItem;
