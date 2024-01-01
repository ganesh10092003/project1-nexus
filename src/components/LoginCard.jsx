import React from 'react'
import { Link } from 'react-router-dom';
const LoginCard = () => {
  return (
    <div className='flex m-auto mt-32 md:m-auto justify-center items-center relative rings w-[500px] h-[500px] md:w-[250px] md:h-[250px]'>
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#00ff0a' }}></i>
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#ff0057' }}></i >
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#fffd44' }}></i>
      <div className='login absolute w-[500px] h-full flex flex-col justify-center items-center gap-4 md:w-[250px] md:gap-3'>
        <h2 className='text-white text-3xl font-bold md:text-xl'>Login</h2>
        <form className='w-[55%] flex flex-col justify-center items-center gap-3'>
          <input className='relative w-full p-3 md:p-1 bg-transparent border-white border-2 text-sm md:text-xs rounded-3xl text-white' type='text' placeholder='Username' />
          <input className='w-full p-3 md:p-1 bg-transparent border-white border-2 text-sm md:text-xs rounded-3xl text-white' type='password' placeholder='Password' />
          <input className='w-[90%] px-3 py-2 md:px-2 md:py-1 bg-transparent rounded-3xl text-sm text-black font-bold bg-gradient-to-br from-[#ff357a] to-[#fff172] border-none cursor-pointer' type='submit' value='Sign In' />
        </form>
        <div className='relative text-sm w-[50%] md:text-[0.6rem] md:w-[60%] flex text-white items-center justify-between'>
          <a href='#'>Forgot Password</a>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div >
  );
}

export default LoginCard