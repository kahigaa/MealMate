const API_URL = 'http://localhost:3000/meals';

export const addMeal = async (meal) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(meal)
  });
  if (!response.ok) throw new Error(await response.text());
  return await response.json();
};

export const fetchMeals = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch meals');
  return await response.json();
};