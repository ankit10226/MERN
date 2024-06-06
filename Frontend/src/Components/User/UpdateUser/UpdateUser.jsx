import React,{ useEffect, useState } from 'react'
import Container from '../../UI/Container/Container'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValue = {name:'',email:'',age:''};
const UpdateUser = () => {
  const [formData,setFormData]=useState([initialValue]);
  const navigate = useNavigate();
  const { id } = useParams();

  const [error,setError] = useState('');
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
    axios.post(`http://localhost/updateUser/${id}`,{formData})
    .then(result => {
      console.log(result),
      navigate('/');
    })
    .catch(err => console.log(err))
    setFormData(initialValue);  
  }
 
  useEffect(()=>{
    axios.get(`http://localhost/getUser/${id}`)
    .then(res => { 
      const items =res.data.items[0];
      setFormData({
        name:items.name,
        email:items.email,
        age:items.age});
    })
    .catch(err => console.log(err))
  },[])
  return (
    <Container className='w-1/3'>
      <form onSubmit={formHandler}>
        <h3>Update User</h3>
        <Input type='text' label='Name' id='name' name='name' className={`${!error ? '' : 'border-red-500'}`} value={formData.name} onChange={handleInputChange}/>
        <Input type='text' label='Email' id='email' name='email' className={`${!error ? '' : 'border-red-500'}`} value={formData.email} onChange={handleInputChange}/>
        <Input type='number' label='Age' id='age' name='age' className={`${!error ? '' : 'border-red-500'}`} value={formData.age} onChange={handleInputChange}/>
        <Button type='submit'>Update User</Button>
      </form>
    </Container>
  )
}

export default UpdateUser
