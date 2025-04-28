import React from 'react';
const MealCard = ({ meal, onDelete }) => {
  return (
    <div className="meal-card">
      <div className="meal-header">
        <h3>{meal.name}</h3>
      </div>
      {meal.imageUrl && (
  <img 
    src={meal.imageUrl} 
    alt={meal.name}
    className="meal-image"
  />
)}
      <div className="meal-details">
        <p>
          <strong>Day:</strong> {meal.day}
        </p>
        <p><strong>Ingredients:</strong></p>
        <ul>
  {Array.isArray(meal.ingredients) ? (
    meal.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))
  ) : (
    <li>{meal.ingredients}</li>
  )}
</ul>
        {meal.recipeLink && (
          <p>
            <strong>Recipe:</strong> 
            <a href={meal.recipeLink} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </p>
        )}
      </div>
      <div className="meal-actions">
  <button
    onClick={() => {
      console.log('Editing meal with ID:', meal.id);
      // Add your edit logic here
    }}
    className="edit-btn"
  >
    Edit
  </button>
  <button
    onClick={() => {
      console.log('Deleting meal with ID:', meal.id);
      onDelete(meal.id);
    }}
    className="delete-btn"
  >
    Delete
  </button>
   </div>
    </div>
  );
};

export default MealCard;