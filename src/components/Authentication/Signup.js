import React from 'react';
import styles from  './signup.module.css'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Heading
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
       
 <FormControl className={styles.fieldcss}> 
 <Heading colorScheme={"teal"}>Signup</Heading> <FormLabel>Name
 </FormLabel>
  <Input onChange={handleForm} required name="name" type='text' />
  <FormLabel>Email address</FormLabel>
  <Input onChange={handleForm} required name="email" type='email' />
  
 
  <FormLabel>Phone</FormLabel>
  <Input onChange={handleForm} required name="phone" type='tel' />
  <FormLabel>Password</FormLabel>
  <Input onChange={handleForm} required name="password" type='password' /><br></br><br></br>
  <Link to='/login'><button>Login</button></Link>
  <Button  onClick={()=>handleSubmit()} className={styles.but}>Signup</Button>
  </FormControl>
  
    </div>
  )
}
export default Signup