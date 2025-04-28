import React, { useState, useEffect } from 'react';
import { addMeal, fetchMeals } from './API/meal'; 
import AddMealForm from './components/AddMealForm';
import MealHolder from './components/MealHolder';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  // Fetch initial meals
  useEffect(() => {
    const loadMeals = async () => {
      try {
        const data = await fetchMeals();
        console.log('Fetched meals:', data);
        setMeals(data);
      } catch (err) {
        setError('Failed to load meals. Please try again.');
        console.error('Error fetching meals:', err);
      }
    };
  
    loadMeals();
  }, []);

  const handleMealAdded = async (mealData) => {
    try {
      const newMeal = await addMeal(mealData);
      console.log('Added meal:', newMeal);
      setMeals((prev) => [...prev, newMeal]);
    } catch (err) {
      setError(err.message);
      console.error('Error adding meal:', err);
    }
  };

  return (
    <div className="app-container">
      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}
      <AddMealForm onMealAdded={handleMealAdded} />
      <MealHolder meals={meals} />
    </div>
  );
}

export default App;
