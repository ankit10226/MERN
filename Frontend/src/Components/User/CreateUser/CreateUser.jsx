import React, { useState } from 'react'
import Container from '../../UI/Container/Container'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValue = {name:'',email:'',age:''};
const CreateUser = () => {
  const [formData,setFormData]=useState(null);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]:value
    }));
  }
  const formHandler = (e) =>{
    e.preventDefault();
    if (formData.name == '' || formData.email == '' || formData.age == '') { 
      setError(true);
      return;
    }else{ 
      setError(false);
    }
    axios.post("http://localhost/createUser",{formData})
    .then(result => {
      console.log(result),
      navigate('/');
    })
    .catch(err => console.log(err))
    setFormData(initialValue); 
  }
 
  return (
    <Container className='w-1/3'>
      <form onSubmit={formHandler}>
        <h3>Create User</h3>
        <Input type='text' label='Name' id='name' name='name' className={`${!error ? '' : 'border-red-500'}`} value={formData?.name || ""} onChange={handleInputChange}/>
        <Input type='text' label='Email' id='email' name='email' className={`${!error ? '' : 'border-red-500'}`} value={formData?.email || ""} onChange={handleInputChange}/>
        <Input type='number' label='Age' id='age' name='age' className={`${!error ? '' : 'border-red-500'}`} value={formData?.age || ""} onChange={handleInputChange}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Container>
  )
}

export default CreateUser
