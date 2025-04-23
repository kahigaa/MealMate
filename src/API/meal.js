const API_URL = 'http://localhost:3000/meals';

export const fetchMeals = async () => {
  const response = await fetch(`${API_URL}/meals`);
  return await response.json();
};

export const addMeal = async (meal) => {
  const response = await fetch(`${API_URL}/meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });
  return await response.json();
};

export const updateMeal = async (id, updatedMeal) => {
  const response = await fetch(`${API_URL}/meals/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedMeal),
  });
  return await response.json();
};

export const deleteMeal = async (id) => {
  const response = await fetch(`${API_URL}/meals/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/users?username=${credentials.username}&password=${credentials.password}`);
  const users = await response.json();
  return users[0] || null;
};