import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {

  const{user,logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async()=>{
    try{
      await logOut();
      navigate('/');
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className='flex absolute w-full items-center justify-between p-4 z-[100]'>
    <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>

    </Link>
    
    {user?.email ? (
      <div>
        <Link to="/account">
          <button className='text-white pr-4'>Account</button>
        </Link>
        
          <button onClick={handleLogout} className='bg-red-600 px-4 py-2 rounded text-white'>Log Out</button>
        
      </div>
      ) : ( 
      <div>
        <Link to="/login">
          <button className='text-white pr-4'>Sign IN</button>
        </Link>
        <Link to="signup">
          <button className='bg-red-600 px-4 py-2 rounded text-white'>Sign UP</button>
        </Link>
      </div>
      )}

    </div>
  )
}

export default Navbar