import {useEffect, useState} from 'react';
import  {useNavigate} from 'react-router-dom';
import axos from 'axios'

const AddMeal - () => {
    const navigate = useNavigate();
     //form inputs and errros
     const [ formData, setFormData] = useState({
        day:''
        name:''
        ingredients:''
        imageUrl:''
        recipeLink:''

     });
     const [error. setError] = useSate('');

}

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
//form validation 
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.name || !formData.day){
    setError ('meal name and day is required')
    return;
  }
}










    ]