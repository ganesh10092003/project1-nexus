// SignUpForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = (data) => {
    // Simple example: Check if username, password, and confirmPassword are not empty
    const errors = {};
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className='flex m-auto mt-32 md:m-auto justify-center items-center relative rings w-[500px] h-[500px] md:w-[250px] md:h-[250px]'>
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#00ff0a' }}></i>
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#ff0057' }}></i >
      <i className='absolute inset-0 border-[#fff] border-2 transition duration-500' style={{ '--clr': '#fffd44' }}></i>
      <div className='signup absolute w-[500px] h-full flex flex-col justify-center items-center gap-4 md:w-[250px] md:gap-3'>
        <h2 className='text-white text-3xl font-bold md:text-xl'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='w-[55%] flex flex-col justify-center items-center gap-2'>
          <div className='relative w-full p-3 md:p-1 border-white border-2 text-sm md:text-xs rounded-3xl text-white'>
            <input className='bg-transparent' type="text" id="username" name="username" placeholder='Username' value={formData.username} onChange={handleChange} />
            {errors.username && <span className="error text-white">{errors.username}</span>}
          </div>
          <div className='relative w-full p-3 md:p-1 border-white border-2 text-sm md:text-xs rounded-3xl text-white' >
            <input className='bg-transparent' type="password" id="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error text-white">{errors.password}</span>}
          </div>
          <div className='relative w-full p-3 md:p-1 border-white border-2 text-sm md:text-xs rounded-3xl text-white'>
            <input className='bg-transparent' type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className="error text-white">{errors.confirmPassword}</span>}
          </div>
          <input className='w-[90%] px-3 py-2 md:px-2 md:py-1 bg-transparent rounded-3xl text-sm text-black font-bold bg-gradient-to-br from-[#ff357a] to-[#fff172] border-none cursor-pointer' type='submit' value='Sign Up' />
        </form>
        <div className='relative text-sm w-[50%] md:text-[0.6rem] md:w-[60%] flex text-white items-center justify-between'>
          <a href='#'>Forgot Password</a>
          <Link to="/">Login</Link>
        </div>
      </div >
    </div >
    // <form onSubmit={handleSubmit}>
    //
    //   <div>
    //     <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
    //     {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
    //   </div>
    //   <button type="submit">Sign Up</button>
    // </form>
  );
};

export default SignUpForm;
