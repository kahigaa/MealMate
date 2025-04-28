import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMeals } from '../context/MealContext';
import Header from '../components/Header';
import MealHolder from '../components/MealHolder';

const DailyView = () => {
  const { day } = useParams();
  const { user, logout } = useAuth();
  const { getMealsByDay, deleteAllMealsForDay } = useMeals();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const meals = getMealsByDay(day);

  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all meals for ${day}?`)) {
      deleteAllMealsForDay(day);
    }
  };

  const handleAddNewMeal = () => {
    navigate('/add-meal', { state: { preselectedDay: day } });
  };

  const handleGoToWeeklyView = () => {
    navigate('/weekly');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="daily-view">
      <Header onLogout={handleLogout} />
      <div className="daily-view-header">
        <h1>Meals for {day}</h1>
        <div className="daily-view-actions">
          <button onClick={handleAddNewMeal} className="action-btn add-btn">
            Add New Meal
          </button>
          <button onClick={handleDeleteAll} className="action-btn delete-all-btn">
            Clear All Meals
          </button>
          <button onClick={handleGoToWeeklyView} className="action-btn back-btn">
            Weekly View
          </button>
        </div>
      </div>
      
      <MealHolder meals={meals} />
    </div>
  );
};

export default DailyView;