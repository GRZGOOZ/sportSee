import styles from "./Dashboard.module.scss";
import KeyDataUser from "./components/KeyDataUser/KeyDataUser";
import Msgbvn from "./components/Msgbvn/Msgbvn";
import Activite from "./components/Activite/Activite";
import Session from "./components/Session/Session";
import Performances from "./components/Performances/Performances";
import Score from "./components/Score/Score";
import { useParams } from "react-router-dom";
import useHookUserData from "../../api/useHookUserData";
import useUserData from "../../api/useUserData";

const Dashboard = () => {
  const { id } = useParams();
  const userDataModel = useHookUserData(Number(id) ? Number(id) : 12);
 // const userDataModel = useUserData(Number(id) ? Number(id) : 12);

  return (
    <div className={styles.content}>
      {userDataModel ? (
        <>
          <Msgbvn firstName={userDataModel.userData.firstName} />
          <div className={styles.content_main}>
            <div className={styles.content_main_graphs}>
              <div className={styles.content_main_graphs_top}>
                <div className={styles.content_main_graphs_top_activite}>
                  <Activite sessions={userDataModel.userActivity.sessions} />
                </div>
                <div className={styles.content_main_graphs_bottom}>
                  <div
                    className={styles.content_main_graphs_bottom_averageSession}
                  >
                    <Session sessions={userDataModel.userAverageSessions.sessions} />
                  </div>
                  <div
                    className={styles.content_main_graphs_bottom_performance}
                  >
                    <Performances
                      kind={userDataModel.userPerformance.kind}
                      data={userDataModel.userPerformance.data}
                    />
                  </div>
                  <div className={styles.content_main_graphs_bottom_score}>
                    <Score userData={userDataModel.userData} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content_main_keydata}>
              <KeyDataUser keyData={userDataModel.userData.keyData} />
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
