import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
      user.forEach(ele=>{
         if(ele.email===loginUser.email && ele.password===loginUser.password){
          alert("Sign in Successfull");
          localStorage.setItem("loginedUser",ele.name)
         }
      })
    }
  return (
    <>
   
    <FormControl colorScheme={"whatsapp"} >
    <Heading>Login</Heading>
  <FormLabel>Email</FormLabel>
  <Input onChange={handleForm} required type='email' />
</FormControl>
<FormControl>
  <FormLabel>Password</FormLabel>
  <Input onChange={handleForm} required type='password' />
  <Button colorScheme={"teal"} onClick={()=>handleSubmit()} >Login</Button>
</FormControl>
<Link to='/signup'>Create Account</Link>
    </>
  )
}

export default Login