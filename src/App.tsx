import { createBritishSuccessionTree } from "./utils/britain";
import { useState } from "react";
import { isDescendant } from "./utils/isDescendant";
import { Selector } from "./Selector";

function App(): JSX.Element {
  const [ancestor, setAncestor] = useState("Queen Elizabeth II");
  const [descendant, setDescendant] = useState("Queen Elizabeth II");
  const [answer, setAnswer] = useState("");
  const [displayedData, setDisplayedData] = useState({
    ancestor: "Queen Elizabeth II",
    descendant: "Queen Elizabeth II",
  });

  return (
    <>
      <Selector
        person={ancestor}
        setPerson={setAncestor}
        personType="Ancestor"
      />
      <Selector
        person={descendant}
        setPerson={setDescendant}
        personType="Descendant"
      />

      <button
        onClick={() => {
          setDisplayedData({ ancestor: ancestor, descendant: descendant });

          setAnswer(
            `${isDescendant(
              descendant,
              ancestor,
              createBritishSuccessionTree()
            )}`
          );
        }}
      >
        GO!!!!
      </button>
      <p>
        {answer === "true" ? "yes" : "no"}, {displayedData.descendant} is a
        descendant of {displayedData.ancestor}
      </p>
    </>
  );
}

export default App;
