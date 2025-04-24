const API_URL = 'http://localhost:3000/meals';

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

export const fetchMeals = async () => {
  try{
    const response = await fetch(API_URL/meals);
    if (!response.ok) {
      throw new Error('Network response was not ok');

    }
    return await response.json();
  }
  catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
}
