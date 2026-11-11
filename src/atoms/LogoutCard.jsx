import React from 'react';
import { Link } from 'react-router';

export default function LogoutCard() {
  return (
    <div className='bg-white max-w-150 p-6 pb-10 rounded-md flex flex-col gap-3 w-full'>
      <h1 className='text-4xl py-4 md:py-10 self-center'>Signed out..</h1>
      <Link to={"/signup"} className='w-full rounded-sm bg-blue-900 text-white cursor-pointer py-3 hover:bg-black max-w-100 self-center text-center'>Signup</Link>
      <Link to={"/login"} className='w-full rounded-sm bg-blue-900 text-white cursor-pointer py-3 hover:bg-black max-w-100 self-center text-center'>Login</Link>
    </div>
  )
}
