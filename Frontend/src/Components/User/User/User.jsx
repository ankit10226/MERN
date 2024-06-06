import React, { useEffect, useState } from 'react'
import Container from '../../UI/Container/Container'
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const[users,setUsers] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost");
        setUsers(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const deleteData = async (e) =>{
    const { id }= e.target; 
    try {
      const res = await axios.get(`http://localhost/deleteUser/${id}`);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className='w-2/3'>
      {/* <Button>Add User +</Button> */}
      <Link to={'/create'}><Button>Add User +</Button></Link>
      <hr />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> 
          {
            users.map((user)=>(
              <tr key={user._id}>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>{user.email}</td>
                <td className='text-center'>{user.age}</td>
                <td className='text-center'>
                  <Link to={`/update/${user._id}`}><Button id={user._id}>Edit</Button></Link>
                  <Button id={user._id} onClick={deleteData}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}

export default User
