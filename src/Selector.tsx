import { logAllPeopleInTree } from "./utils/treeLogging";
import { createBritishSuccessionTree } from "./utils/britain";
interface SelectorProps {
  person: string;
  setPerson: React.Dispatch<React.SetStateAction<string>>;
  personType: "Ancestor" | "Descendant";
}

export function Selector({
  person,
  setPerson,
  personType,
}: SelectorProps): JSX.Element {
  return (
    <div>
      <label htmlFor={personType}>{personType}</label>
      <select
        id={personType}
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        {logAllPeopleInTree(createBritishSuccessionTree()).map(
          (p: string, index) => (
            <option value={p} key={index}>
              {p}
            </option>
          )
        )}
      </select>
    </div>
  );
}
