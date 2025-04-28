import React, { useState, useEffect } from "react";
import { fetchMeals, addMeal, updateMeal } from "./API/meal";
import LoginPage from "./Pages/LoginPage";
import AddMealForm from "./components/AddMealForm";
import MealHolder from "./components/MealHolder";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [editingMeal, setEditingMeal] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (user) {
      const loadMeals = async () => {
        try {
          const data = await fetchMeals();
          setMeals(data);
        } catch (err) {
          setError("Failed to load meals. Please try again.");
          console.error("Error fetching meals:", err);
        }
      };
      loadMeals();
    }
  }, [user]);

  const handleMealAdded = async (mealData) => {
    try {
      const newMeal = await addMeal(mealData);
      setMeals((prevMeals) => [...prevMeals, newMeal]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (meal) => {
    setEdittingMeal(meal);
    setFormData(meal);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedMeal = await updateMeal(editingMeal.id, formData); // API call
      setMeals(
        meals.map((meal) => (meal.id === editingMeal.id ? updatedMeal : meal))
      );
      setEditingMeal(null);
      setFormData({});
    } catch (err) {
      setError(" Please try again.");
      console.error("Error updating meal:", err);
    }
  };

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-container">
      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      <div className="top-bar">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content">
        <AddMealForm onMealAdded={handleMealAdded} />
        <MealHolder meals={meals} />
      </div>
    </div>
  );
}

export default App;
