import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./userInterface";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import Mode from "./Mode";

function App() {
  const [user, setUser] = useState<null | Users>(null);
  const [value, setValue] = useState("Octocat");
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const data = await response.json();
      setUser(data);
    })();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${value}`);
    if (response.ok) {
      const user = await response.json();
      setUser(user);
    } else {
      setUser(null);
    }
  };
  const toggle = () => {
    setDark(!dark);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={dark ? "headerContainer-lightmode" : "headerContainer"}>
      <div className={dark ? "Container lightmode" : "Container"}>
        <Mode toggle={toggle} dark={dark} setDark={setDark} />
        <SearchBar
          user={user}
          value={value}
          dark={dark}
          handleSearch={handleSearch}
          setValue={setValue}
          handleKey={handleKey}
        />
        <Card user={user} value={value} dark={dark} />
      </div>
    </div>
  );
}

export default App;
