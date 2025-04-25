import React from "react";
import { format, startOfWeek, addDays } from "date-fns";
import './WeeklyViews.css'

const WeeklyViews = ({ meals, currentDate }) => {
    const weekStart = startOfWeek(currentDate);
    const days = [];

    for (let i = 0; i < 7; i++) {
        days.push(addDays(weekStart, i))
    }

    return (
        <div className="weekly-views">
            <div className="week-header">
                   {days.map((day, i) => (
                    <div key={i} className="day-header">
                    <div className="day-name">{format(day, 'EEE')}</div>
                    <div className="day-date">{format(day, 'd')}</div>
                    </div>
                   ))}
            </div>

            <div className="week-grid">
                {days.map((day, i) => {
                    const dateString = format(day, 'yyyy-MM-dd');
                    const dayMeals = meals.filter(meal => meal.date === dateString);
        
                    return (
                        <div key={i} className="day-column">
                            {dayMeals.map((meal, j) => (
                                <div key={j} className="meal-card">
                                    <h4>{meal.name}</h4>
                                    <p>{meal.imageUrl}</p>
                                </div>
                            ))}
                        </div>
                    )
                })}

            </div>
        </div>
    )

}
 export default WeeklyViews;