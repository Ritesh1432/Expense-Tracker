import React from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [user , setUser] = React.useState([])
    
    const handleForm= (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        console.log(user)
        await fetch(`http://localhost:8080/users`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
        alert("Sign up Successfull");
    }
  return (
    <div>
 <FormControl> <FormLabel>Name</FormLabel>
  <Input onChange={handleForm} required name="name" type='text' />
  <FormLabel>Email address</FormLabel>
  <Input onChange={handleForm} required name="email" type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
 
  <FormLabel>Phone</FormLabel>
  <Input onChange={handleForm} required name="phone" type='tel' />
  <FormLabel>Password</FormLabel>
  <Input onChange={handleForm} required name="password" type='password' />
  <Button onClick={()=>handleSubmit()}>Signup</Button>
  </FormControl>
  <Link to='/login'>Login</Link>
    </div>
  )
}
export default Signup