import { Link, useNavigate } from 'react-router'
import fetchHelper from '../helpers/fetchHelper';
import { useState } from 'react';

export default function Signup() {
  const [errors, setErros] = useState({});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await fetchHelper("http://localhost:3000/auth/signup", "POST", {name, email, password}, false);
   if (!result.errors){
    navigate("/login");
   }else{
    const errorsObj = result.errors.reduce((acc, err) => {
      acc[err.path] = err.msg;
      return acc;
    }, {});
    setErros(errorsObj)
   }
    
  }

  return (
    <div className='px-5 py-10 md:px-0 md:py-0 w-screen h-screen flex flex-col md:flex-row justify-between items-center'>
      <div className='md:pl-[10vw] w-[50%] flex flex-col gap-2 items-center'>
        <form onSubmit={handleSubmit} className='not-last:shadow-xl flex flex-col items-center gap-4 p-4 md:p-10 w-full md:min-w-[400px]'>
            <h1 className='text-4xl bold'>Sign up</h1>
            <h2>Sign up to continue</h2>
            <input className='w-full p-2 border-b' placeholder='Name' type="text" name="name" id="name" />
            {errors.name && <li className='w-full text-xs text-red-800'>{errors.name}</li>}
            <input className='w-full p-2 border-b' placeholder='Email' type="email" name="email" id="email" />
            {errors.email && <li className='w-full text-xs text-red-800'>{errors.email}</li>}
            <input className='w-full p-2 border-b' placeholder='Password' type="password" name="password" id="password" />
            {errors.password && <li className='w-full text-xs text-red-800'>{errors.password}</li>}
          <button className='w-full bg-blue-900 text-white cursor-pointer py-3 hover:bg-black' type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? <span className='text-blue-800 underline cursor'>Sign In</span></Link>
      </div>
        <img src='src/assets/gym.jpg' className='overflow-hidden invisible md:visible w-[40%] h-full object-cover object-right' />
    </div>
  )
}
