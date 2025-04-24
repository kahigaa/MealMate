import React,{useState, useEffect} from 'react'
import { fetchMeals }  from '../API/meal';
import '/MealHolder.css'
 

function MealHolder({ selectedDay, onDaySelect}) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getMeals = async () => {
            try {
                const data = await fetchMeals();
                setMeals(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        getMeals();
    }, []);

    if (loading) 
        return <div className='loading'>
            Loading meals...
        </div>
    if (error)
        return <div>
            Error: {error}
        </div>

 
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

export default MealHolder;