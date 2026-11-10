import React from 'react'
import { editIcn } from '../helpers/HeroIcons';

export default function UserInfo({name, bio, editHandler = ()=>{}, edit=false, handleFollow= ()=>{}, follows, handleUnfollow= ()=>{}}) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-150 '>
      <div className='flex flex-row gap-3 items-center align-center'>
        <h1 className='text-6xl'>{name}</h1>
        {edit ? <button onClick={editHandler} className='w-4 cursor-pointer hover:text-blue-600'>{editIcn}</button> : <></>}
      </div>
      <div className='flex flex-row gap-3 items-center align-center'>
        <p>{bio != null ? bio : "No bio"}</p>
        {edit ? <button onClick={editHandler} className='w-4 cursor-pointer hover:text-blue-600'>{editIcn}</button> : <></>}
      </div>
      {edit ? <></>
      : follows 
      ? <button onClick={handleUnfollow} className='min-w-20 md:self-start rounded-sm bg-red-900 text-xs text-white cursor-pointer py-2 hover:bg-black'>Unfollow</button>
        : <button onClick={handleFollow} className='min-w-20 md:self-start rounded-sm bg-blue-900 text-xs text-white cursor-pointer py-2 hover:bg-black'>Follow</button>
      }
      </div>
  )
}
