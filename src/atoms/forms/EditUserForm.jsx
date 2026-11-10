import React from 'react'

export default function EditUserForm({submitEdits, user, cancelEditing, errors}) {
  return (
    <form onSubmit={submitEdits} className='flex flex-col gap-4 w-full max-w-150 ' action="">
      <input className='bg-white' type="text" min={3} max={32} required name="name" id="name" defaultValue={user.name}/>
      {errors.name && <li className='w-full text-xs text-red-800'>{errors.name}</li>}
      <textarea minLength={10} maxLength={1000} className='bg-white' name="bio" id="bio" defaultValue={user.bio}></textarea>
      {errors.bio && <li className='w-full text-xs text-red-800'>{errors.bio}</li>}
      <div className='flex flex-row gap-4'>
        <button className='w-full max-w-50 bg-blue-900 text-white cursor-pointer py-3 hover:bg-black' type="submit">Submit Edit</button>
        <button onClick={cancelEditing} className='w-full max-w-50 bg-red-900 text-white cursor-pointer py-3 hover:bg-black'>Cancel</button>
      </div>
</form>
  )
}
