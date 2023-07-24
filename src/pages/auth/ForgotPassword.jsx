import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'



const ForgotPassword = () => {

  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [answer, setAnswer] = useState('')

  // form function
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       const res=await axios.post(`/api/v1/auth/forgot-password`,{email,newPassword,
      answer
    })
       if(res.data.success){
           toast.success(res.data.message)
           
          
           navigate('/login')
       }else{
           toast.error(res.data.message)
       }
    } catch (error) {
       console.log(error)
       toast.error('Something went wrong')
    }
  
   }
  return (
    <Layout title={'Forgot Password - Ecommerce APP'} >
           <div className='form-container'>
        <h1>Reset Password</h1>
        <form
         onSubmit={handleSubmit}
         >

<div className="mb-3">

<input value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" className="form-control" placeholder='Enter your Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>
<div className="mb-3">

<input value={answer} onChange={(e)=> setAnswer(e.target.value)} required type="text" className="form-control" placeholder='Enter your Favorite Sports Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
</div>
<div className="mb-3">

<input value={newPassword} onChange={(e)=> setNewPassword(e.target.value)} required type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
</div>




<button type="submit" className="btn btn-primary">Reset</button>
</form>


    </div>
    </Layout>
  )
}

export default ForgotPassword