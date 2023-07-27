import { logAllPeopleInTree } from "./utils/treeLogging";
import { createBritishSuccessionTree } from "./utils/britain";
import { useState } from "react";
import { isDescendant } from "./utils/isDescendant";

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
      <label htmlFor="ancestor">Ancestor</label>
      <select
        id="ancestor"
        value={ancestor}
        onChange={(e) => {
          setAncestor(e.target.value);
        }}
      >
        {logAllPeopleInTree(createBritishSuccessionTree()).map(
          (person: string, index) => (
            <option value={person} key={index}>
              {person}
            </option>
          )
        )}
      </select>
      <label htmlFor="descendant">Descendant</label>
      <select
        id="descendant"
        value={descendant}
        onChange={(e) => {
          setDescendant(e.target.value);
        }}
      >
        {logAllPeopleInTree(createBritishSuccessionTree()).map(
          (person: string, index) => (
            <option key={index}>{person}</option>
          )
        )}
      </select>
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
