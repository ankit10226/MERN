import React from 'react'
import Button from '../UI/Button/Button'
import Container from '../UI/Container/Container'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const logoutUser = () =>{
        if(confirm('Are You Sure?')){
            // localStorage.removeItem('token');
            const token = localStorage.getItem('token');
            console.log(token);
            // navigate('/');
        }
    }
    return (
        <Container> 
            <Button type="button" onClick={logoutUser}>Logout</Button>
        </Container>
    )
}

export default Home
