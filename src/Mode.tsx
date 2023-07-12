import { Dispatch, SetStateAction } from "react";
import modestyles from "./Mode.module.css";
export default function Mode({
  toggle,
  dark,
}: {
  toggle: () => void;
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={modestyles.dev}>
      <h1 className={dark ? modestyles.lightdevfinder : modestyles.devfinder}>
        devfinder
      </h1>
      <div>
        <div className={modestyles.mode}>
          <p className={modestyles.darkmode_theme} onClick={toggle}>
            {dark ? "DARK" : "LIGHT"}
          </p>
          <img
            className={modestyles.modeicons}
            src={dark ? "/icon-moon.svg" : "/icon-sun.svg"}
            alt=""
            onClick={toggle}
          />
        </div>
      </div>
    </div>
  );
}
