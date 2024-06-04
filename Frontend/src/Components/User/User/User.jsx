import React, { useState } from 'react'
import Container from '../../UI/Container/Container'
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

const User = () => {
  const[users,setUsers] = useState([
    {id:1,name:'Ankit kumar singh', email:'ankit10226.as@gmail.com',age:24},
    {id:2,name:'Rompie killer', email:'rompiekiller@gmail.com',age:20}
  ]);
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
              <tr key={user.id}>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>{user.email}</td>
                <td className='text-center'>{user.age}</td>
                <td className='text-center'>
                  <Link to={'/update'}><Button id={user.id}>Edit</Button></Link>
                  <Button id={user.id}>Delete</Button>
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
