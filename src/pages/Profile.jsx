import React, { useEffect, useState } from 'react'
import Navbar from '../atoms/Navbar'
import ProfileCard from '../atoms/ProfileCard'
import fetchHelper from '../helpers/fetchHelper';
import { ClipLoader } from "react-spinners";
import ListOfPosts from '../atoms/ListOfPosts';
import Divider from '../atoms/Divider';

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const userID = localStorage.getItem("userID");
  const getUser = async () => {
    setLoading(true);
    const result = await fetchHelper(`http://localhost:3000/user/${userID}`, "GET", {}, true);
    setUser(result.user);
    setLoading(false)
  };

  useEffect(() => {
    getUser();
    setLoading(false);
  }, []);
  
  return (
    <div className='flex flex-col relative items-center min-h-screen px-4 md:px-0 py-10 pb-30 md:py-20 md:pb-40 bg-gray-200'>
      {loading ? 
        <ClipLoader
          color="000000"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"/> 
      : <ProfileCard user={user} refreshUser={getUser} edit={true} />
      }
      <br />
      <Divider />
      <h2 className='py-8 text-4xl'>My Posts:</h2>
      {user.id != undefined ? <ListOfPosts allPosts={user.posts} refreshPosts={getUser}  /> : <></>} 
      <Navbar />
    </div>
  )
}
