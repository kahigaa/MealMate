import React from 'react'
import propTypes from 'prop-types'
import '/MealHolder.css'

function MealHolder({ meals, selectedDay, onDaySelect }) {
  return (
    <div className='meal-holder-container'>
    <div className='meal-scroll-container'>
        {meals.map((meal) => (
            <div
                key={meal.id}
                className={`meal-card ${selectedDay === meal.day ? 'selected' :

               '' }`}
               onClick={() => onDaySelect(meal.day)}
            >
                <div className='meal-header'>
                 <h3 className='meal-day'>{meal.day}</h3>
                 <h2 className='meal-name'>{meal.name}</h2>
                </div>
                <div className='meal-image-container'>
                    <img 
                    src={meal.imageUrl} 
                    alt={meal.name} 
                    className='meal-image' 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "placeholder-food.jpg"
                    }}
                    />
                </div>

                <div className='meal-details'>
                <div className='ingredients'>
                   
                    <h4>Ingredients:</h4>
                    <p>{meal.ingredients}</p>
                </div>
                </div>
                {meal.recipeLink && (
                    <a
                     href={meal.recipeLink}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='recipe-link'
                     onClick={(e) => e.stopPropagation()}
                    >
                    View Recipe
                    </a>
                )}
                </div>
            
        ))}
    </div>
    </div>
  )
}
MealHolder.propTypes = {
    meals: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        recipeLink: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
    selectedDay: PropTypes.string,
    onDaySelect: PropTypes.func.isRequired,
  };
export default MealHolder