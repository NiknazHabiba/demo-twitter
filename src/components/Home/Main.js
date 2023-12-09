import { useContext } from "react";
import Twitts from "./Twitts/Twitts";
import TwittsContext from "../../context/twitts-context";

// const DUMMY_TWITTS = [
//   {
//     id: "t1",
//     userName: "rick",
//     email: "rick@gmail.com",
//     content:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//     date: "10/11/2023-8:20PM",
//   },
//   {
//     id: "t2",
//     userName: "glenn",
//     email: "glenn@gmail.com",
//     content:
//       "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
//     date: "11/5/2023-5:40PM",
//   },
//   {
//     id: "t3",
//     userName: "mggie",
//     email: "maggie@gmail.com",
//     content:
//       "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
//     date: "9/7/2023-10:30AM",
//   },
//   {
//     id: "t4",
//     userName: "rosita",
//     email: "rosita@gmail.com",
//     content:
//       "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.",
//     date: "12/12/2023-8:10PM",
//   },
// ];

const Main = () => {

  const twittsCtx = useContext(TwittsContext);
  const twitts = twittsCtx.twitts;

  return <Twitts twitts={twitts} />;
};

export default Main;
