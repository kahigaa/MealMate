import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MealSubmitButton 
        onClick={handleMealSubmit}
        isLoading={isSubmitting}
        disabled={!mealDataValid}
        buttonText='Save Meal Entry'
      
      />
      <MealHolder />
    </>
  );

  return App() {
    const [count, setCount] = usestate(0);

    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MeanHolder/>} />
      <Route path="/add-meal" element={AddMeal/>} />
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
