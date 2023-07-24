import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Login = () => {
  const [auth, setAuth] = useAuth()
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location =useLocation()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       const res=await axios.post(`/api/v1/auth/login`,{email,password})
       if(res.data.success){
           toast.success(res.data.message)
           setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
           })
           localStorage.setItem('auth',JSON.stringify(res.data))
           navigate(location.state||'/')
       }else{
           toast.error(res.data.message)
       }
    } catch (error) {
       console.log(error)
       toast.error('Something went wrong')
    }
  
   }
  return (
    <Layout title={'Login'} >
    <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

<div className="mb-3">

<input value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>
<div className="mb-3">

<input value={password} onChange={(e)=> setPassword(e.target.value)} required type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
</div>



<div className='mb-3'>
<button type="button" className="btn btn-primary" onClick={()=> {navigate('/forgot-password')}} >Forget Password</button>
</div>
<button type="submit" className="btn btn-primary">Login</button>
</form>


    </div>
</Layout>
  )
}

export default Login