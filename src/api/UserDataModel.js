class UserDataModel {
  constructor(rawUserData, rawUserActivity, rawUserPerformance, rawUserAverageSessions) {
    this.userData = this.formatUserData(rawUserData);
    this.userActivity = this.formatUserActivity(rawUserActivity);
    this.userPerformance = this.formatUserPerformance(rawUserPerformance);
    this.userAverageSessions = this.formatUserAverageSessions(rawUserAverageSessions);
  }

  formatUserData(rawUserData) {
    return {
      id: rawUserData.id,
      firstName: rawUserData.userInfos.firstName,
      lastName: rawUserData.userInfos.lastName,
      age: rawUserData.userInfos.age,
      todayScore: rawUserData.todayScore,
      score: rawUserData.score,
      keyData: {
        calorieCount: rawUserData.keyData.calorieCount,
        proteinCount: rawUserData.keyData.proteinCount,
        carbohydrateCount: rawUserData.keyData.carbohydrateCount,
        lipidCount: rawUserData.keyData.lipidCount,
      },
    };
  }

  formatUserActivity(rawUserActivity) {
    return {
      userId: rawUserActivity.userId,
      sessions: rawUserActivity.sessions.map(session => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      })),
    };
  }

  formatUserPerformance(rawUserPerformance) {
    return {
      userId: rawUserPerformance.userId,
      kind: rawUserPerformance.kind,
      data: rawUserPerformance.data.map(item => ({
        value: item.value,
        kind: item.kind,
      })),
    };
  }

  formatUserAverageSessions(rawUserAverageSessions) {
    return {
      userId: rawUserAverageSessions.userId,
      sessions: rawUserAverageSessions.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength,
      })),
    };
  }
}

export default UserDataModel;
