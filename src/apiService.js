export const getUserInformation = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user information");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
