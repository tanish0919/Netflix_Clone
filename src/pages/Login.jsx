import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [error,setError] = useState('')
  const {user,logIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError('');
    try{
      await logIn(email,password);
      navigate('/')
    }catch(error){
      console.log(error);
      setError(error.message)
    }
  }
  return (
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/46bc87cd-4c4c-4485-8b93-d5f21c581d56/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    <div className='w-full h-screen bg-black/60 fixed top-0 left-0'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
        <div className='max-w-[320px] mx-auto py-16 '>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          {error? <p className='p-3 bg-red-500 my-2'>{error}</p>: null}
          <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
            <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
            <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
            <button className='rounded bg-red-600 py-3 font-bold my-6'>Sign In</button>
          <div className='flex justify-between items-center text-sm text-gray-600'>
            <p><input className='mr-2' type="checkbox" />Remember ME</p>
            <p>Need help?</p>
          </div>
          <p className='py-4'><span className='text-gray-600 p-2'>New to NETFLIX?</span>
          <Link to="/signup" >
            Sign UP
          </Link>
          </p>
          </form>
        </div>
      </div>


    </div>
  
  
  </div>
  )
}

export default Login