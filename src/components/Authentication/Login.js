import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './signup.module.css';

const Login = () => {
  
  const [user , setUser] = React.useState([]);
  const [loginUser,setLoginUser] = React.useState({});


  

  React.useEffect(()=>{
       fetch(`http://localhost:8080/users`)
       .then (res=>res.json())
       .then (res=>setUser(res))
  }, []);

  const handleForm= (e) => {
    const { name, value } = e.target;
    setLoginUser({...loginUser,[name]: value});
}

  const handleSubmit =  () => {
    console.log(user)
    console.log(loginUser)
    console.log("click")
      user.forEach(ele=>{
         if(ele.email===loginUser.email && ele.password===loginUser.password){
          console.log("auth done")
          alert("Sign in Successfull");
         }
      })
    }
  return (
    <>
   
    <FormControl isRequired className={styles.fieldcss} colorScheme={"whatsapp"} >
    <Heading>Login</Heading>
  <FormLabel>Email</FormLabel>
  <Input onChange={handleForm} name="email" type='email' />
  <FormLabel>Password</FormLabel>
  <Input onChange={handleForm} name="password" type='password' />
  <Button className={styles.but} colorScheme={"teal"} onClick={()=>handleSubmit()} >Login</Button>
  <Link to='/signup'><Button colorScheme={"teal"} className={styles.but}>Create Account</Button></Link>
</FormControl>

    </>
  )
}

export default Login