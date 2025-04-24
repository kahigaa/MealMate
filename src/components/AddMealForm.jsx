import { useState } from 'react';
import MealForm from '../../components/MealForm';
import { useNavigate } from 'react-router-dom';

const AddMeal = () => {
  const { createMeal } = useMeals();
  const navigate = useNavigate();
  const [meal, setMeal] = useState({
    name: '',
    ingredients: '',
    day: 'Monday',
    recipeLink: '',
    imageUrl :'' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMeal(meal);
    navigate('/weekly');
  };

  return (
    <div className="meal-form-container">
      <h2>Add New Meal</h2>
      <MealForm meal={meal} setMeal={setMeal} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddMeal; 

