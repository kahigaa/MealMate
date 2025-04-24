import React, { useState } from 'react';
import '../RecipeForm.css';

const AddMealForm = ({ onMealAdded }) => {  
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    day: 'Sunday',
    recipeLink: '',
    imageUrl: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const mealData = {
        ...formData,
        ingredients: formData.ingredients.split(',').map(item => item.trim())
      };

      
      onMealAdded(mealData);  
      
    
      setFormData({
        name: '',
        ingredients: '',
        day: 'Sunday',
        recipeLink: '',
        imageUrl: ''
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to save meal');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-meal-form-container">
      <h2>Add New Meal</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Meal Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients:</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Day:</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
          >
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Recipe Link:</label>
          <input
            type="url"
            name="recipeLink"
            value={formData.recipeLink}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="public/Images/example.jpg"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Add Meal'}
        </button>
      </form>
    </div>
  );
};

export default AddMealForm;