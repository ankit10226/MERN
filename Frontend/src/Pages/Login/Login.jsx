import React, { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom';
import Container from '../UI/Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import axios from 'axios'; 
import { createPortal } from 'react-dom';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const initialValue = {username:'' , password:''}
const Login = () => {
    const [formData,setFormData]=useState(initialValue);
    const [error,setError] = useState('');
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
    }

    const formHandler = async (e) =>{
        e.preventDefault(); 
        if (formData.username == '' || formData.password == '') { 
          setError(true);
          return;
        }else{ 
          setError(false);
        }

        try {
            const res = await axios.post("http://localhost:5000/login", formData);
            const token = res.data.token;
            localStorage.setItem('token',token);
            navigate('/home');
        } catch (err) {
            const errMsg = err.response.data.message; 
            setModalData({
              showModal:true,
              title:'An Error Occured',
              message:errMsg
            }); 
        } 
      }
      const setHideModal = (data) =>{
          setModalData(prevState =>({
              ...prevState,
              showModal:data
          })); 
          setFormData(initialValue); 
      }
    return (
        <>
            {modalData.showModal && createPortal(<ErrorModal title={modalData.title} message={modalData.message} hideModal={setHideModal}/> , document.getElementById('modalShowContainer'))}
            <Container className='w-1/3'>
                <form onSubmit={formHandler}>
                    <h3>Login User</h3> 
                    <Input type='text' label='Username' id='username' name='username' className={`${!error ? '' : 'border-red-500'}`} value={formData.username} onChange={handleInputChange}/>
                    <Input type='text' label='password' id='password' name='password' className={`${!error ? '' : 'border-red-500'}`} value={formData.password} onChange={handleInputChange}/>
                    <div className='flex justify-center items-center'> 
                     <Button type='submit'>Login</Button>
                     <Link to={'/signup'}><Button>Signup</Button></Link>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Login
