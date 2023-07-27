import styles from "./Content.module.scss";
import KeyDataUser from "./components/KeyDataUser/KeyDataUser";
import Msgbvn from "./components/Msgbvn/Msgbvn";
import Activite from "./components/Activite/Activite";
import useUserData from "../../useUserData";
import Session from "./components/Session/Session";
import Performances from "./components/Performances/Performances";
import Score from "./components/Score/Score";

const Content = () => {
  const userId = 12;
  const { userData, userActivity, userPerformance, userAverageSessions } =
    useUserData(userId);

  return (
    <div className={styles.content}>
      {userData && userActivity && userPerformance && userAverageSessions ? (
        <>
          <Msgbvn firstName={userData.userInfos.firstName} />
          <div className={styles.content_main}>
            <div className={styles.content_main_graphs}>
              <div className={styles.content_main_graphs_top}>
                <div className={styles.content_main_graphs_top_activite}>
                  <Activite sessions={userActivity.sessions} />
                </div>
                <div className={styles.content_main_graphs_bottom}>
                  <div
                    className={styles.content_main_graphs_bottom_averageSession}
                  >
                    <Session sessions={userAverageSessions.sessions} />
                  </div>
                  <div
                    className={styles.content_main_graphs_bottom_performance}
                  >
                    <Performances
                      kind={userPerformance.kind}
                      data={userPerformance.data}
                    />
                  </div>
                  <div className={styles.content_main_graphs_bottom_score}>
                    <Score todayScore={userData.todayScore} />
                  </div>
                </div>
              </div>
            </div>
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
