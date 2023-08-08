import { Link } from "react-router-dom";
import styles from "../../Communaute.module.scss"

const UsersLink = ( {userData}) => {
  return (
    <ul className={styles.accordion_content_links}>
      {userData.map((user) => (
        <li key={user.id}>
          <Link to={`/sportSee/${user.id}`}>{user.userInfos.firstName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersLink;