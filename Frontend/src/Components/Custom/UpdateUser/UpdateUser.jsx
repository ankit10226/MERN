import React,{ useState } from 'react'
import Container from '../../UI/Container/Container'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const initialValue = {name:'',email:'',age:''};
const UpdateUser = () => {
  const [formData,setFormData]=useState(initialValue);
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
     
    setFormData(initialValue); 
  }
 
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
