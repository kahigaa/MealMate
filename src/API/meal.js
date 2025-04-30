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
    console.log("Sending update data for meal ID:", id, mealData);
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...mealData,
        ingredients: Array.isArray(mealData.ingredients)
          ? mealData.ingredients
          : mealData.ingredients.split(",").map((i) => i.trim()),
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Update meal failed: Status ${response.status}, ${errorText}`
      );
      throw new Error(errorText || "Failed to update meal");
    }
    const updatedMeal = await response.json();
    console.log("Update meal response:", updatedMeal);
    return updatedMeal;
  } catch (error) {
    console.error("Error updating meal:", error);
    throw error;
  }
};

export const deleteMeal = async (id) => {
  try {
    console.log("Deleting meal with ID:", id);
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Delete meal failed: Status ${response.status}, ${errorText}`
      );
      throw new Error(errorText || "Failed to delete meal");
    }
    console.log("Delete meal successful :", id);
    return response.ok;
  } catch (error) {
    console.error("Error deleting meal:", error);
    throw error;
  }
};