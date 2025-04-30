import React from 'react';
import MealHolder from '../components/MealHolder';

const DailyView = ({ meals, onEdit }) => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todaysMeals = meals.filter(meal => meal.day === today);

  return (
    <div>
      <h2>Meals for {today}</h2>
      <MealHolder meals={todaysMeals} onEdit={onEdit} />
    </div>
  );
};

export default DailyView;