import styles from "./Dashboard.module.scss";
import KeyDataUser from "./components/KeyDataUser/KeyDataUser";
import Msgbvn from "./components/Msgbvn/Msgbvn";
import Activite from "./components/Activite/Activite";
import Session from "./components/Session/Session";
import Performances from "./components/Performances/Performances";
import Score from "./components/Score/Score";
import { useParams } from "react-router-dom";
import useHookUserData from "../../api/useHookUserData";
//import useUserData from "../../api/useUserData";


const Dashboard = () => {
  const { id } = useParams();
  // const { userData, userActivity, userPerformance, userAverageSessions } =
  // useUserData(Number(id));
  const { userData, userActivity, userPerformance, userAverageSessions } = useHookUserData(Number(id) ? Number(id) : 12);


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
                    <Score userData={userData} />
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

export default Dashboard;
