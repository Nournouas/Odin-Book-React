import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import Navbar from '../atoms/Navbar'
import ProfileCard from '../atoms/ProfileCard'
import fetchHelper from '../helpers/fetchHelper';
import { ClipLoader } from "react-spinners";
import ListOfPosts from '../atoms/ListOfPosts';
import Divider from '../atoms/Divider';

export default function OtherProfile() {
  const { profileID } = useParams();
  const userID = localStorage.getItem("userID");
  const [user, setUser] = useState({});
  const [follows, setFollows] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const getUser = async () => {
    setLoading(true);
    const result = await fetchHelper(`http://localhost:3000/user/${profileID}`, "GET", {}, true);
    setUser(result.user);
    const followsResult = await fetchHelper(`http://localhost:3000/user/${profileID}/checkFollow`, "GET", {}, true);
    setFollows(followsResult);
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
      : <ProfileCard user={user} refreshUser={getUser} edit={false} follows={follows} />
      }
      <br />
      <Divider />
      <h2 className='py-8 text-4xl'>Their Posts:</h2>
      {user.id != undefined ? <ListOfPosts allPosts={user.posts} refreshPosts={getUser} showForm={false} /> : <></>} 
      <Navbar />
    </div>
  )
}
