import subStyles from "./Subsection.module.css";
import { Users } from "../userInterface";
export default function Subsection({
  user,
  dark,
}: {
  value: string;
  user: Users | null;
  dark: boolean;
}) {
  return (
    <div>
      <div className={dark ? subStyles.lightmodesub : subStyles.subsection}>
        <article>
          <p>Repos</p>
          <p className={subStyles.followers}>{user?.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className={subStyles.followers}>{user?.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className={subStyles.followers}>{user?.following}</p>
        </article>
      </div>
    </div>
  );
}
