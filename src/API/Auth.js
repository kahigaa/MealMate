const API_URL = "http://localhost:3000/users";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}?username=${username}`);
    const users = await response.json();

    if (users.length === 0) {
      throw new Error("User not found");
    }

    const user = users[0];
    if (user.password !== password) {
      throw new Error("Incorrect password");
    }

    return user; // successful login returns user
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
