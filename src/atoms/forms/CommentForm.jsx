import React from 'react'

export default function CommentForm({handleCommentSubmit, errors}) {

  return (
    <div className='flex flex-col'>
      <form onSubmit={handleCommentSubmit} className="w-full flex flex-row gap-2 ">
        <textarea className='bg-gray-200 resize-none w-full p-2 border-0' name="body" required minLength={1} id="body" placeholder='Comment something on your mind' />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </form>
      {errors.body && <p className='w-full text-xs text-red-800'>{errors.body}</p>}  
    </div>

  )
}
