import React, { useState } from 'react';
import '../MealCard.css';

const MealCard = ({ meal, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ingredients = Array.isArray(meal.ingredients) ? meal.ingredients : [];
  const hasImage = meal.imageUrl && meal.imageUrl.trim() !== '';
  const hasRecipeLink = meal.recipeLink && meal.recipeLink.trim() !== '';

  return (
    <div className={`meal-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="meal-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{meal.day}</h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="toggle-btn"
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {isExpanded && (
        <div className="meal-details">
          <p><strong>Name:</strong> {meal.name}</p>
          
          {ingredients.length > 0 && (
            <div>
              <strong>Ingredients:</strong>
              <ul>
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {hasRecipeLink && (
            <div>
              <strong>Recipe:</strong>{' '}
              <a href={meal.recipeLink} target="_blank" rel="noreferrer">
                View Recipe
              </a>
            </div>
          )}

          {hasImage && (
            <div className="meal-image">
              <img src={meal.imageUrl} alt={meal.name} />
            </div>
          )}

          <div className="meal-actions">
            <button className="edit-meal-btn" onClick={() => onEdit(meal)}>
              Edit Meal
            </button>
            <button className="delete-meal-btn" onClick={() => onDelete(meal.id)}>
              Delete Meal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealCard;