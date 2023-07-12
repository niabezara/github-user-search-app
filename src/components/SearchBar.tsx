import { Users } from "../userInterface";
import Searchstyle from "./SearchBar.module.css";
export default function SearchBar({
  user,
  dark,
  handleButtonClick,
  setValue,
}: {
  value: string;
  user: Users | null;
  dark: boolean;
  setValue: any;
  handleButtonClick: () => Promise<void>;
}) {
  return (
    <div
      className={
        dark ? Searchstyle.lightsearchsection : Searchstyle.searchSection
      }
    >
      <input
        className={dark ? Searchstyle.lightinput : Searchstyle.searchBar}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search GitHub username…"
      />
      {user == null ? <p className={Searchstyle.error}>No results</p> : null}
      <button className={Searchstyle.search} onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}
