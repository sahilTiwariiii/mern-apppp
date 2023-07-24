import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import "../../styles/AuthStyle.css"
import { toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate=useNavigate()
    // form function
    const handleSubmit=async(e)=>{
     e.preventDefault()
     try {
        const res=await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer})
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
        <Layout title={'Register'} >
            <div className='form-container'>
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input value={name} onChange={(e)=> setName(e.target.value)} required type="text" className="form-control" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
   
    <input value={email} onChange={(e)=> setEmail(e.target.value)} required type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
   
    <input value={password} onChange={(e)=> setPassword(e.target.value)} required type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
   
    <input value={phone} onChange={(e)=> setPhone(e.target.value)} required type="text" className="form-control" id="exampleInputEmail1" placeholder='Phone' aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
     
    <input value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" className="form-control" id="exampleInputEmail1" placeholder='Address' aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
     
    <input value={answer} onChange={(e)=> setAnswer(e.target.value)} required type="text" className="form-control" id="exampleInputEmail1" placeholder='What is Favorite sports' aria-describedby="emailHelp" />
  </div>
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


            </div>
        </Layout>
    )
}

export default Register