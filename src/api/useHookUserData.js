import { useEffect, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "./data";
import UserDataModel from "./UserDataModel";

const useHookUserData = (userId) => {
  const [userDataModel, setUserDataModel] = useState(null);

  useEffect(() => {
    const userMainData = USER_MAIN_DATA.find((user) => user.id === userId);
    const userActivityData = USER_ACTIVITY.find(
      (activity) => activity.userId === userId
    );
    const userPerformanceData = USER_PERFORMANCE.find(
      (performance) => performance.userId === userId
    );
    const userAverageSessionsData = USER_AVERAGE_SESSIONS.find(
      (averageSessionsData) => averageSessionsData.userId === userId
    );

    const formattedUserData = new UserDataModel(
      userMainData,
      userActivityData,
      userPerformanceData,
      userAverageSessionsData
    );

    setUserDataModel(formattedUserData);
  }, [userId]);

  return userDataModel;
};

export default useHookUserData;
