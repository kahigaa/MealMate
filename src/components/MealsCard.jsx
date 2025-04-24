import React, { useState } from 'react';
import '../MealCard.css';

const MealCard = ({ meal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  

  return (
    <div className={`meal-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="meal-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{meal.day}</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="toggle-btn"
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="meal-details">
          <p><strong>Name:</strong> {meal.name}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {meal.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {meal.recipeLink && (
            <p>
              <strong>Recipe:</strong>{' '}
              <a href={meal.recipeLink} target="_blank" rel="noreferrer">
                View Recipe
              </a>
            </p>
          )}
          {meal.imageUrl && (
            <div className="meal-image">
              <img src={meal.imageUrl} alt={meal.name} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MealCard;