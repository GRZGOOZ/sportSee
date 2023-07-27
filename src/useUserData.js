import { useEffect, useState } from "react";
import {
  getUserInformation,
  getUserActivity,
  getUserPerformance,
  getUserAverageSessions,
} from "./apiService";

const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);

  useEffect(() => {
    getUserInformation(userId)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));

    getUserActivity(userId)
      .then((activityData) => setUserActivity(activityData))
      .catch((error) => console.error("Error fetching user activity:", error));

    getUserPerformance(userId)
      .then((performanceData) => setUserPerformance(performanceData))
      .catch((error) =>
        console.error("Error fetching user performance:", error)
      );

    getUserAverageSessions(userId)
      .then((averageSessionsData) =>
        setUserAverageSessions(averageSessionsData)
      )
      .catch((error) =>
        console.error("Error fetching user average sessions:", error)
      );
  }, [userId]);

  return { userData, userActivity, userPerformance, userAverageSessions };
};

export default useUserData;
