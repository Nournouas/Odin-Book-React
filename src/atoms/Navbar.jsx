import React from 'react'
import { Link } from 'react-router'
import { home, profile, friends, search, logout } from '../helpers/HeroIcons'


export default function Navbar() {
  return (
    <nav className='w-full flex flex-row justify-evenly fixed bottom-0 p-3 bg-gradient-to-r from-blue-950 to-blue-900'>
      <Link 
      className='flex flex-col items-center gap-1 text-white p-2 text-xs rounded-sm cursor hover:bg-white hover:text-black'
      to="/home">{home}Home</Link>
      <Link 
      className='flex flex-col items-center gap-1 text-white p-2 text-xs rounded-sm cursor hover:bg-white hover:text-black'
      to="/profile">{profile}My profile</Link>
      <Link 
      className='flex flex-col items-center gap-1 text-white p-2 text-xs rounded-sm cursor hover:bg-white hover:text-black'
      to="/friends">{friends}Friends list</Link>
      <Link 
      className='flex flex-col items-center gap-1 text-white p-2 text-xs rounded-sm cursor hover:bg-white hover:text-black'
      to="/search">{search}Search</Link>
      <Link 
      className='flex flex-col items-center gap-1 text-white p-2 text-xs rounded-sm cursor hover:bg-white hover:text-black'
      to="/logout">{logout}Log out</Link>
    </nav>
  )
}
