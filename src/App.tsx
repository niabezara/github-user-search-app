import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./userInterface";
import Card from "./components/Card";

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
        <div className="dev">
          <h1 className={dark ? "lightdevfinder" : "devfinder"}>devfinder</h1>
          <div>
            <div className="mode">
              <p className="darkmode theme">{dark ? "DARK" : "LIGHT"}</p>
              <img
                src={dark ? "/icon-moon.svg" : "/icon-sun.svg"}
                alt=""
                onClick={toggle}
              />
            </div>
          </div>
        </div>
        <div className={dark ? "lightsearchsection" : "searchSection"}>
          <input
            className={dark ? "lightinput" : "searchBar"}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search GitHub username…"
          />
          {user == null ? <p className="error">No results</p> : null}
          <button className="search" onClick={handleButtonClick}>
            Search
          </button>
        </div>
        <Card user={user} value={value} dark={dark} />
      </div>
    </div>
  );
}

export default App;
