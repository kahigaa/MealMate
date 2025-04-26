import { Link } from 'react-router-dom';

const MealCard = ({ meal, onDelete }) => {
  return (
    <div className="meal-card">
      <div className="meal-header">
        <h3>{meal.name}</h3>
      </div>
      <div className="meal-details">
        <p>
          <strong>Day:</strong> {meal.day}
        </p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
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
        <Link to={`/edit/${meal.id}`} className="edit-btn">
          Edit
        </Link>
        <button onClick={() => onDelete(meal.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MealCard;