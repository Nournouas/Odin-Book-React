import React from 'react'
import UserCard from './UserCard'
import Divider from './Divider'

export default function ListOfUsers({usersList=[], followers=false}) {
  
  let listUserCards = usersList.map((user) => {
    return <UserCard key={user.id} user={user} />
  })
  return (
    <div className='flex flex-col gap-10 md:max-w-150 w-full h-full'>
      <h2 className='font-bold text-4xl'>{followers ? "Your followers" : "You are following:"}</h2>
      <Divider />
      <>{listUserCards}</>
    </div>
    
  )

}
