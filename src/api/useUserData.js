import { useEffect, useState } from "react";
import {
  getUserInformation,
  getUserActivity,
  getUserPerformance,
  getUserAverageSessions,
} from "./apiService";
import UserDataModel from "./UserDataModel";

const useUserData = (userId) => {
  const [userDataModel, setUserDataModel] = useState(null);

  useEffect(() => {
    Promise.all([
      getUserInformation(userId),
      getUserActivity(userId),
      getUserPerformance(userId),
      getUserAverageSessions(userId),
    ])
      .then(
        ([userData, userActivity, userPerformance, userAverageSessions]) => {
          const formattedUserData = new UserDataModel(
            userData,
            userActivity,
            userPerformance,
            userAverageSessions
          );
          setUserDataModel(formattedUserData);
        }
      )
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  return userDataModel;
};

export default useUserData;
