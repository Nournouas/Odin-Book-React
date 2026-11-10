import React, { useEffect, useState } from 'react';
import Navbar from '../atoms/Navbar';
import { ClipLoader } from "react-spinners";
import fetchHelper from '../helpers/fetchHelper';
import ListOfUsers from '../atoms/ListOfUsers';

export default function Followers() {
  const [following, setFollowing] = useState();
  const [loading, setLoading] = useState(true);
  const userID = localStorage.getItem("userID");

  const getFriends = async () => {
    setLoading(true);
    const result = await fetchHelper(`http://localhost:3000/user/${userID}/followers`, "GET", {}, true);
    console.log(result)
    setFollowing(result.followers);
    setLoading(false);
  }

  useEffect(() => {
    getFriends();
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
            : <ListOfUsers followers={true} usersList={following}/>
            }
      <Navbar />
    </div>
  )
}
