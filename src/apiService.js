export const getUserInformation = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user information data:", error);
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error fetching user activity", error);
    throw error;
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error fetching user activity", error);
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error fetching user activity", error);
    throw error;
  }
};
