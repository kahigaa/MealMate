import React, { useState } from 'react';
import { addMeal } from './API/meal'; // Named import
import AddMealForm from './components/AddMealForm';
import MealHolder from './components/MealHolder';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const handleMealAdded = async (mealData) => {
    try {
      const newMeal = await addMeal(mealData);
      setMeals(prev => [newMeal, ...prev]);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Add meal failed:', err);
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
