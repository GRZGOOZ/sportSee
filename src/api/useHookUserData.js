import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "./data";

const useHookUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    const userMainData = USER_MAIN_DATA.find((user) => user.id === userId);
    const userActivityData = USER_ACTIVITY.find(
      (activity) => activity.userId === userId
    );
    const userPerformanceData = USER_PERFORMANCE.find(
      (performance) => performance.userId === userId
    );
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (averageSessionsData) => averageSessionsData.userId === userId
    );

    setUserData(userMainData);
    setUserActivity(userActivityData);
    setUserPerformance(userPerformanceData);
    setUserAverageSessions(userAverageSessions);
  }, [userId]);

  return { userData, userActivity, userPerformance, userAverageSessions };
};

export default useHookUserData;
