<<<<<<< HEAD
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

=======
import {useEffect, useState} from 'react';
import  {useNavigate} from 'react-router-dom';
import axos from 'axios'

const AddMeal - () => {
    const navigate = useNavigate();
     //form inputs and errros
     const [ formData, setFormData] = useState({
        day:''
        name:''
        ingredients:''
        imageUrl:''
        recipeLink:''

     });
     const [error. setError] = useSate('');

}

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
//new meal to jspn server
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.name || !formData.day){
    setError ('meal name and day is required')
    return;
  }
}










    ]
>>>>>>> 37b368d7d66f4997e501be91bc4433e0abe7962e
