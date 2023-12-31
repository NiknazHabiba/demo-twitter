import { createContext, useEffect, useState } from "react";

const DUMMY_TWITTS = [
  {
    id: "t1",
    userName: "Daryl",
    email: "rick@gmail.com",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    date: "10/11/2023-20:20",
  },
  {
    id: "t2",
    userName: "Glenn",
    email: "glenn@gmail.com",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
    date: "11/5/2023-17:40",
  },
  {
    id: "t3",
    userName: "Mggie",
    email: "maggie@gmail.com",
    content:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
    date: "9/7/2023-10:30",
  },
  {
    id: "t4",
    userName: "Rosita",
    email: "rosita@gmail.com",
    content:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.",
    date: "12/12/2023-20:10",
  },
];

const TwittsContext = createContext({
  twitts: [],
  addTwitt: (twitt) => {},
  findTwitt: (twittId) => {},
  deleteTwitt: (twitt) => {},
});

const initialTwitts = () => {
  // localStorage.setItem("twitts", JSON.stringify(DUMMY_TWITTS));
  const twitts = localStorage.getItem("twitts");
  return twitts ? JSON.parse(twitts) : DUMMY_TWITTS;
};

export const TwittsContextProvider = (props) => {
  const [twitts, setTwitts] = useState(initialTwitts);

  useEffect(() => {
    localStorage.setItem("twitts", JSON.stringify(twitts));
  }, [twitts]);

  const addTwittHandler = (newTwitt) => {
    setTwitts((prev) => [newTwitt, ...prev]);
  };

  const findTwittHandler = (twittId) => {
    return twitts.find((twitt) => twitt.id === twittId);
  };

  const deleteTwittHandler = (twitt) => {
    setTwitts((allTwitts) => {
      return allTwitts.filter((currTwitt) => currTwitt.id !== twitt.id);
    });
  };

  const context = {
    twitts: twitts,
    addTwitt: addTwittHandler,
    findTwitt: findTwittHandler,
    deleteTwitt: deleteTwittHandler,
  };

  return (
    <TwittsContext.Provider value={context}>
      {props.children}
    </TwittsContext.Provider>
  );
};

export default TwittsContext;
