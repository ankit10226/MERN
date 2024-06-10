import React, { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom';
import Container from '../UI/Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import axios from 'axios'; 

const initialValue = {username:'' , password:''}
const Login = () => {
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
        console.log(formData);
        if (formData.username == '' || formData.password == '') { 
          setError(true);
          return;
        }else{ 
          setError(false);
        }

        try {
            const result = await axios.post("http://localhost:5000/login", formData);
            console.log(result);
            // navigate('/');
        } catch (err) {
            console.error(err);
        }
        
        // setFormData(initialValue); 
    }
    return (
        <>
            <Container className='w-1/3'>
                <form onSubmit={formHandler}>
                    <h3>Login User</h3> 
                    <Input type='text' label='Username' id='username' name='username' className={`${!error ? '' : 'border-red-500'}`} value={formData.username} onChange={handleInputChange}/>
                    <Input type='number' label='password' id='password' name='password' className={`${!error ? '' : 'border-red-500'}`} value={formData.password} onChange={handleInputChange}/>
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
