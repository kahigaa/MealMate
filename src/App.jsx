import { useState } from 'react'
import './App.css'
import MealSubmitButton from './components/MealSubmitButton'
import MealHolder from './components/MealHolder'

function App() {
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
  )
}

export default App
