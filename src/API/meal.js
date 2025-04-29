const API_URL = "http://localhost:3000/meals";

export const addMeal = async (meal) => {
  console.log("Sending meal data:", meal);
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  if (!response.ok) throw new Error(await response.text());
  return await response.json();
};

export const fetchMeals = async () => {
  try {
    const response = await fetch(`${API_URL}`);
  
    console.log("API response:", response);
    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};

export const updateMeal = async (id, mealData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    });
    if (!response.ok) {
      throw new Error("Failed to update meal");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
