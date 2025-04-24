import { Link } from 'react-router-dom';

const MealCard = ({ meal, onDelete }) => {
  return (
    <div className="meal-card">
      <h3>{meal.name}</h3>
      <p>
        <strong>Ingredients:</strong> {meal.ingredients.join(', ')}
      </p>
      <p>
        <strong>Day:</strong> {meal.day}
      </p>
      <div className="meal-actions">
        <Link to={`/edit/${meal.id}`}>Edit</Link>
        <button onClick={() => onDelete(meal.id)}>Delete</button>
      </div>
    </div>
  );
};

export default MealCard;