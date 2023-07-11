import styles from "./card.module.css";
import { Users } from "../userInterface";

export default function Card({
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
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className={dark ? styles.lightmode : styles.container}>
      <div className={styles.avatarsection}>
        <img className={styles.avatarpic} src={user?.avatar_url} alt="" />
        <section className={styles.userinfo}>
          <article>
            <h1
              className={dark ? styles.lightLoginName : styles.loginName}
              key={user?.id}
            >
              {user?.login === "octocat" ? "The Octocat" : user?.login}
            </h1>
            <p className={styles.userLogin}>@{user?.login}</p>
          </article>
          {user?.created_at ? (
            <p>{`Joined ${new Date(user.created_at).getDate()} ${
              months[new Date(user.created_at).getMonth()]
            } ${new Date(user.created_at).getFullYear()}`}</p>
          ) : null}
        </section>
      </div>
      <p className={styles.bio}>
        {user?.bio ? user?.bio : "This profile has no bio."}
      </p>
      <div className={dark ? styles.lightmodesub : styles.subsection}>
        <article>
          <p>Repos</p>
          <p className={styles.followers}>{user?.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className={styles.followers}>{user?.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className={styles.followers}>{user?.following}</p>
        </article>
      </div>
      <div>
        <section className={styles.iconsection}>
          {sections.map((item, index) => {
            return (
              <section className={styles.icons} key={index}>
                <img
                  src={!dark ? item.icondark : item.iconlight}
                  alt=""
                  className={
                    item.text === "Not Available" ? styles.notavailable : ""
                  }
                />
                <p
                  className={
                    item.text === "Not Available" ? styles.grayText : ""
                  }
                >
                  {item.text}
                </p>
              </section>
            );
          })}
        </section>
      </div>
    </div>
  );
}
