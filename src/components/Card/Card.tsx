import styles from "./card.module.css";
import Subsection from "../SubSection/Subsection";
import Footer from "../Footer/Footer";
import { Users } from "../../userInterface";

export default function Card({
  user,
  dark,
}: {
  value: string;
  user: Users | null;
  dark: boolean;
}) {
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
      <Subsection user={user} dark={dark} value={""} />
      <Footer user={user} dark={dark} value={""} />
    </div>
  );
}
