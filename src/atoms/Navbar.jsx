import React from 'react'
import { Link } from 'react-router'
import { home, profile, friends, friendPosts, logout, search } from '../helpers/HeroIcons'


export default function Navbar() {
  const regLinkClass = 'flex flex-col items-center gap-1 text-white text-center p-1 text-xs rounded-sm cursor hover:bg-white hover:text-black'
  const activeLinkClass = 'flex flex-col items-center gap-1 text-black text-center p-1 text-xs rounded-sm cursor bg-white hover:bg-white hover:text-black'
  const path = window.location.pathname;
  return (
    <nav className='w-full flex flex-row justify-evenly fixed bottom-0 px-1 py-3 bg-linear-to-r from-blue-950 to-blue-900'>
      <Link 
      className={path == "/home" ? activeLinkClass : regLinkClass}
      to="/home">{home}All Posts</Link>
      <Link 
      className={path == "/followingPosts" ? activeLinkClass : regLinkClass}
      to="/followingPosts">{friendPosts}Following Posts</Link>
      <Link 
      className={path == "/search" ? activeLinkClass : regLinkClass}
      to="/search">{search}Search</Link>
      <Link 
      className={path == "/following" ? activeLinkClass : regLinkClass}
      to="/following">{friends}Following</Link>
      <Link 
      className={path == "/followers" ? activeLinkClass : regLinkClass}
      to="/followers">{friends}Followers</Link>
      <Link 
      className={path == "/profile" ? activeLinkClass : regLinkClass}
      to="/profile">{profile}My profile</Link>
      <Link 
      className={path == "/logout" ? activeLinkClass : regLinkClass}
      to="/logout">{logout}Log out</Link>
    </nav>
  )
}
