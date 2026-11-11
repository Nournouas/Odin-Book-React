import React from 'react'

export default function SearchForm({searchUserHandler, errors}) {
  return (
    <div className='flex w-full max-w-150 items-center flex-col gap-5 p-10 bg-white rounded-xl'>
      <h1 className='text-3xl font-bold'>Search for a user!</h1>
      <form onSubmit={searchUserHandler} className="w-full flex flex-col gap-3 " action="">
        <input minLength={3} placeholder='Username' className='bg-gray-100 resize-none w-full p-2 border-0' type="text" name="name" id="name"/>
        {errors.title && <li className='w-full text-xs text-red-800'>{errors.title}</li>}
        <button className='min-w-30 md:self-center rounded-sm bg-blue-900 text-white cursor-pointer py-3 hover:bg-black' type="submit">Search</button>
      </form>
    </div>
  )
}
