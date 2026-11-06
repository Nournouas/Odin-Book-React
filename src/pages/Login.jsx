import { Link, useNavigate } from 'react-router'
import fetchHelper from '../helpers/fetchHelper';
import { useState } from 'react';
import { ClipLoader } from "react-spinners";
import LoginForm from '../atoms/forms/LoginForm';

export default function Login() {
  const [errors, setErros] = useState({});
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await fetchHelper("http://localhost:3000/auth/login", "POST", {email, password}, false);
    setLoading(false);
    if (!result.errors){
      localStorage.setItem("token", result.token)
      navigate("/home");
    }else{
      
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {});
      setErros(errorsObj);
    }
  }

  return (
    <div className='px-5 py-10 md:px-0 md:py-0 w-screen h-screen flex flex-col md:flex-row justify-between items-center'>
      <div className='md:pl-[10vw] w-[50%] flex flex-col gap-2 items-center'>
        {loading ?       
          <ClipLoader
            color="000000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"/> 
            : <LoginForm errors={errors} handleSubmit={handleSubmit}/>
          }
        <Link to="/signup">Don't have an account? <span className='text-blue-800 underline cursor'>Sign Up</span></Link>
      </div>
        <img src='src/assets/gym.jpg' className='overflow-hidden invisible md:visible w-[40%] h-full object-cover object-right' />
    </div>
  )
}
