const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const BASE_URL = "http://localhost:3000"; // Update with your backend API base URL

export const getUserInformation = async (userId) => {
  const url = `${BASE_URL}/user/${userId}`;
  return fetchData(url);
};

export const getUserActivity = async (userId) => {
  const url = `${BASE_URL}/user/${userId}/activity`;
  return fetchData(url);
};

export const getUserAverageSessions = async (userId) => {
  const url = `${BASE_URL}/user/${userId}/average-sessions`;
  return fetchData(url);
};

export const getUserPerformance = async (userId) => {
  const url = `${BASE_URL}/user/${userId}/performance`;
  return fetchData(url);
};
