import React, { useState, useEffect } from 'react';
import { fetchMeals, addMeal, updateMeal } from './API/meal';
import LoginPage from './Pages/LoginPage';
import AddMealForm from './components/AddMealForm';
import MealHolder from './components/MealHolder';
import './App.css';

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
          setError('Failed to load meals. Please try again.');
          console.error('Error fetching meals:', err);
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
    setEditingMeal(meal);
    setFormData({
      ...meal,
      ingredients: Array.isArray(meal.ingredients) ? meal.ingredients : meal.ingredients?.split(',') || []
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedMeal = await updateMeal(editingMeal.id, formData);
      setMeals(
        meals.map((meal) =>
          meal.id === editingMeal.id ? updatedMeal : meal
        )
      );
      setEditingMeal(null);
      setFormData({});
    } catch (err) {
      setError('cannot update try again.');
      console.error('Error updating meal:', err);
    }
  };

  const cancelEdit = () => {
    setEditingMeal(null);
    setFormData({});
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
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="content">
        {editingMeal && (
          <div className="edit-form">
            <h3>Edit Meal</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Day:
                <input
                  type="text"
                  name="day"
                  value={formData.day || ''}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Ingredients (comma-separated):
                <input
                  type="text"
                  name="ingredients"
                  value={formData.ingredients?.join(', ') || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ingredients: e.target.value.split(',').map((i) => i.trim()),
                    })
                  }
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl || ''}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Recipe Link:
                <input
                  type="text"
                  name="recipeLink"
                  value={formData.recipeLink || ''}
                  onChange={handleFormChange}
                />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={cancelEdit}>
                Cancel
              </button>
            </form>
          </div>
        )}
        <AddMealForm onMealAdded={handleMealAdded} />
        <MealHolder meals={meals} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;



