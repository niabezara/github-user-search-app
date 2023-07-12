import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./userInterface";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
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

  const handleButtonClick = async () => {
    const response = await fetch(`https://api.github.com/users/${value}`);
    console.log(response);
    if (response.ok) {
      const user = await response.json();
      setUser(user);
    } else {
      console.log("hi");
      setUser(null);
    }
  };
  const toggle = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "headerContainer-lightmode" : "headerContainer"}>
      <div className={dark ? "Container lightmode" : "Container"}>
        <Mode toggle={toggle} dark={dark} setDark={setDark} />
        <SearchBar
          user={user}
          value={value}
          dark={dark}
          handleButtonClick={handleButtonClick}
          setValue={setValue}
        />
        <Card user={user} value={value} dark={dark} />
      </div>
    </div>
  );
}

export default App;
