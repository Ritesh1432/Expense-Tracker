import React from 'react'

const Login = () => {
  
  const [user , setUser] = React.useState([]);
  const [loginUser,setLoginUser] = React.useState({});

  let navigate=useNavigate();
  
  const { toggleAuth, isAuth, handleIsAuth } = React.useContext(AuthContext);
  

  useEffect(()=>{
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
          toggleAuth(true);
          console.log(isAuth)
          alert("Sign in Successfull");
          localStorage.setItem("loginedUser",ele.name)
          navigate('/');
         }
      })
    }
  return (
    <>
    <FormControl>
  <FormLabel>Email</FormLabel>
  <Input onChange={handleForm} required type='email' />
</FormControl>
<FormControl>
  <FormLabel>Password</FormLabel>
  <Input onChange={handleForm} required type='password' />
  <Button onClick={()=>handleSubmit()} >Login</Button>
</FormControl>
<Link to='/signup'>Create Account</Link>
    </>
  )
}

export default Login