import { Users } from "../userInterface";
import fooStyles from "./Footer.module.css";
export default function Footer({
  user,
  dark,
}: {
  value: string;
  user: Users | null;
  dark: boolean;
}) {
  const sections = [
    {
      icondark: "/icon-location.svg",
      iconlight: "/icon-location-light.svg",
      text: user?.location || "Not Available",
    },
    {
      icondark: "/icon-website.svg",
      iconlight: "/website-lightmode.svg",
      text: user?.blog || "Not Available",
    },
    {
      icondark: "/icon-twitter.svg",
      iconlight: "/twitter-lightmode.svg",
      text: user?.twitter_username || "Not Available",
    },
    {
      icondark: "/icon-company.svg",
      iconlight: "/company-lightmode.svg",
      text: user?.company || "Not Available",
    },
  ];
  return (
    <div>
      <section className={fooStyles.iconsection}>
        {sections.map((item, index) => {
          return (
            <section className={fooStyles.icons} key={index}>
              <img
                src={!dark ? item.icondark : item.iconlight}
                alt=""
                className={
                  item.text === "Not Available" ? fooStyles.notavailable : ""
                }
              />
              <p
                className={
                  item.text === "Not Available" ? fooStyles.grayText : ""
                }
              >
                {item.text}
              </p>
            </section>
          );
        })}
      </section>
    </div>
  );
}
