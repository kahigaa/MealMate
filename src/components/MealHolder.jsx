import React from "react";
import MealCard from "./MealCard";
import "../MealHolder.css";

const MealHolder = ({ meals, onEdit }) => {
  return (
    <div className="meal-holder-container">
      <h2 className="meal-holder-title">Your Meals</h2>
      <div className="meal-cards-wrapper">
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <MealCard key={`${meal.id}-${index}`} meal={meal} onEdit={onEdit} />
          ))
        ) : (
          <p className="no-meals-message">No meals added yet</p>
        )}
      </div>
    </div>
  );
};

export default MealHolder;
