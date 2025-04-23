import { useState } from 'react';
import { useMeals } from '../../context/MealContext';
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

}

