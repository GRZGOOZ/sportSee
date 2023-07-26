import { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import KeyDataUser from "./components/KeyDataUser/KeyDataUser";
import Msgbvn from "./components/Msgbvn/Msgbvn";
import { getUserInformation } from "../../apiService";

const Content = () => {
  const [userData, setUserData] = useState(null);
  const userId = 12;
  useEffect(() => {
    getUserInformation(userId)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className={styles.content}>
      {userData ? (
        <>
          <Msgbvn userInfos={userData.userInfos} />
          <div className={styles.content_main}>
            <div className={styles.content_main_graphs}></div>
            <div className={styles.content_main_keydata}>
              <KeyDataUser keyData={userData.keyData} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Content;
