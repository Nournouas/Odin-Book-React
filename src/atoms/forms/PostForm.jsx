import React from 'react'

export default function PostForm({handleSubmit, errors}) {
  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-xl'>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 " action="">
        <input placeholder='Title' className='bg-gray-100 resize-none w-full p-2 border-0' type="text" name="title" id="title" />
        {errors.title && <li className='w-full text-xs text-red-800'>{errors.title}</li>}
        <textarea className='bg-gray-100 resize-none w-full p-2 border-0' name="body"  id="body" placeholder='Write something on your mind'/>
        {errors.body && <li className='w-full text-xs text-red-800'>{errors.body}</li>}
        <button className='min-w-30 md:self-end rounded-sm bg-blue-900 text-white cursor-pointer py-3 hover:bg-black' type="submit">Post</button>
      </form>
    </div>

  )
}
