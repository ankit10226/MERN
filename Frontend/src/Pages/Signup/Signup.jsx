import React, { useState } from 'react'  
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../UI/Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { createPortal } from 'react-dom';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const initialValue = {name:'',username:'',password:'',age:''};
const Signup = () => {
  const [formData,setFormData]=useState(initialValue);
  const [errors, setErrors] = useState({ name: false, username: false, password: false, age: false });
  const [errModal,setErrorModal] = useState(true);
  const [modalData, setModalData] = useState({
    showModal:false,
    title:'',
    message:''
  });

  const navigate = useNavigate();
  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setFormData(prevState=>({
      ...prevState,
      [name]:value
    }));

    setErrors(prevState=>({ ...prevState, [name]: value === '' }));
  }
  const formHandler = async (e) =>{
    e.preventDefault(); 
    const newErrors = {
      name: formData.name === '',
      username: formData.username === '',
      password: formData.password === '',
      age: formData.age === ''
    };

    setErrors(newErrors); 
    if (Object.values(newErrors).some((error) => error)) {
      return;
    } 

    try {
      const res = await axios.post("http://localhost:5000/signup",{formData}); 
      setErrorModal(false);
      const resMsg = res.data.message; 
      setModalData({
        showModal:true,
        title:'Success',
        message:resMsg
      }); 
      
    } catch (err) {   
        const errMsg = err.response.data.message.errorResponse.errmsg;
        const result = errMsg.includes('duplicate key error collection');
        if (result) {          
          setModalData({
            showModal:true,
            title:'An Error Occured',
            message:'User already Exists'
          }); 
        }else{
          setModalData({
            showModal:true,
            title:'An Error Occured',
            message:'Something Went Wrong'
          }); 
        }
    } 
  }
  const setHideModal = (data) =>{
    setModalData(prevState =>({
        ...prevState,
        showModal:data
    })); 
    if (errModal) {      
      setFormData(initialValue); 
    } else {
      navigate('/');
    }
  }
  return (
    <>
      {modalData.showModal && createPortal(<ErrorModal title={modalData.title} message={modalData.message} hideModal={setHideModal}/> , document.getElementById('modalShowContainer'))}
      <Container className='w-1/3'>
        <form onSubmit={formHandler}>
          <h3>Signup User</h3>
          <Input type='text' label='Name' id='name' name='name' className={`${errors.name ? 'border-red-500' : ''}`} value={formData.name} onChange={handleInputChange}/>
          <Input type='text' label='Username' id='username' name='username' className={`${errors.username ? 'border-red-500' : ''}`} value={formData.username} onChange={handleInputChange}/>
          <Input type='text' label='Password' id='password' name='password' className={`${errors.password ? 'border-red-500' : ''}`} value={formData.password} onChange={handleInputChange}/>
          <Input type='number' label='Age' id='age' name='age' className={`${errors.age ? 'border-red-500' : ''}`} value={formData.age} onChange={handleInputChange}/>
          <div className='flex justify-center items-center'> 
            <Button type='submit'>Signup</Button>
            <Link to={'/'}><Button>Login</Button></Link>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Signup
