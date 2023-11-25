import style from "./TwittItem.module.css"

const TwittItem = (props) => {
    return (
        <div className={style.container}>
            <h2>{props.twitt.userName}</h2>
            <p className={style.email}>{props.twitt.email}</p>
            <p className={style.content}>{props.twitt.content}</p>
            <small>{props.twitt.date}</small>
        </div>
    )
}

export default TwittItem;