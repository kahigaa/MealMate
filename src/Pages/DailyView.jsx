
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMeals } from '../context/MealContext';
import Header from '../components/Header';
import MealHolder from '../components/MealHolder';

const DailyView = () => {
  const { day } = useParams();
  const { user } = useAuth();
  const { getMealsByDay } = useMeals();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const meals = getMealsByDay(day);

  return (
    <div className="daily-view">
      <Header />
      <h1>Meals for {day}</h1>
      <MealHolder meals={meals} />
      <button onClick={() => navigate('/weekly')} className="back-btn">
        Back to Weekly View
      </button>
    </div>
  );
};

export default DailyView;