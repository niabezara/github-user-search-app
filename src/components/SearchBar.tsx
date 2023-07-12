import { Users } from "../userInterface";
import Searchstyle from "./SearchBar.module.css";
export default function SearchBar({
  user,
  dark,
  handleSearch,
  handleKey,
  setValue,
}: {
  value: string;
  user: Users | null;
  dark: boolean;
  setValue: any;
  handleKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => Promise<void>;
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
        onKeyDown={(e) => handleKey(e)}
        placeholder="Search GitHub username…"
      />
      {user == null ? <p className={Searchstyle.error}>No results</p> : null}
      <button className={Searchstyle.search} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
