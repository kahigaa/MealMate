import React from 'react'
import '/App.css'

function MealSubmitButton({
    onClick,
    disabled = false,
    isLoading = false,
    buttonText = 'log meal',
    loadingText = 'saving...',

}) {

  return (
    <button
        type='submit'
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`meal-submit-button ${disabled ? 'disabled' : ''} ${isLoading ? 'loading' : ''}`}
        aria-busy={isLoading}
    >
     {isLoading ? (
        <>
          <span className='spinner' aria-hidden='true'></span>
          {loadingText}
        </>
     ):(
        buttonText
     )}
    </button>
  )
}
  

export default MealSubmitButton