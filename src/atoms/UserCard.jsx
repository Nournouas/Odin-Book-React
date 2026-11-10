import React from 'react'
import { Link } from 'react-router'

export default function UserCard({user}) {
  Link
  console.log(user)
  return (
      <Link to={`/profile/${user.id}`} className='hover:bg-blue-200 w-full p-4 flex flex-col items-start gap-2 bg-white rounded-lg hover:underline'>
        <h2 className='text-xl py-2 font-bold'>{user.name}</h2>
        <h3>They have <span className='font-bold'>{user.posts.length} </span> posts</h3>
        <button className='min-w-30 p-2 bg-blue-800 self-end cursor-pointer rounded-md text-white'>Visit Profile</button>
      </Link>
  )
}
