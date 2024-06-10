import React, { useState } from 'react'  
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '../UI/Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const initialValue = {name:'',username:'',password:'',age:''};
const Signup = () => {
  const [formData,setFormData]=useState(initialValue);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]:value
    }));
  }
  const formHandler = async (e) =>{
    e.preventDefault();
    if (formData.name == '' || formData.username == '' || formData.password == '' || formData.age == '') { 
      setError(true);
      return;
    }else{ 
      setError(false);
    }
    const result = await axios.post("http://localhost:5000/signup",{formData})
    try {
      console.log(result)
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setFormData(initialValue); 
  }

  return (
    <Container className='w-1/3'>
      <form onSubmit={formHandler}>
        <h3>Signup User</h3>
        <Input type='text' label='Name' id='name' name='name' className={`${!error ? '' : 'border-red-500'}`} value={formData.name} onChange={handleInputChange}/>
        <Input type='text' label='Username' id='username' name='username' className={`${!error ? '' : 'border-red-500'}`} value={formData.username} onChange={handleInputChange}/>
        <Input type='text' label='Password' id='password' name='password' className={`${!error ? '' : 'border-red-500'}`} value={formData.password} onChange={handleInputChange}/>
        <Input type='number' label='Age' id='age' name='age' className={`${!error ? '' : 'border-red-500'}`} value={formData.age} onChange={handleInputChange}/>
        <Button type='submit'>Signup</Button>
      </form>
    </Container>
  )
}

export default Signup
