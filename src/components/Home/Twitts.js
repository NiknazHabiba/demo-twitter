import { Fragment } from "react";
import TwittItem from "./TwittItem";

const Twitts = (props) => {
  return (
    <Fragment>
      {props.twitts.map((twitt) => (
        <TwittItem key={twitt.id} twitt={twitt} />
      ))}
    </Fragment>
  );
};

export default Twitts;
