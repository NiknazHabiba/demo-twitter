import style from "./FormCard.module.css";

const FormCard = (props) => {
  return (
    <form className={style.form} onSubmit={props.onSubmit} >
      {props.children}
    </form>
  );
};

export default FormCard;
