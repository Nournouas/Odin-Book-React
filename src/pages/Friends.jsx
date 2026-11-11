import React, { useEffect, useState } from 'react'
import fetchHelper from '../helpers/fetchHelper';
import { ClipLoader } from "react-spinners";
import Navbar from '../atoms/Navbar';
import ListOfPosts from '../atoms/ListOfPosts';

export default function Friends() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const userID = localStorage.getItem("userID");
  

  const getFriendPosts = async () => {
    setLoading(true);
    const resultFollowing = await fetchHelper(`http://localhost:3000/user/${userID}/following`, "GET", {}, true);
    const followingPosts = resultFollowing.following.map((following) => following.posts).flat()
    console.log(followingPosts)
    setPosts(followingPosts);
    setLoading(false);
  }

  useEffect(() => {
    getFriendPosts();
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
            : <ListOfPosts allPosts={posts} refreshPosts={getFriendPosts} showForm={true} />
            }
      <Navbar />
    </div>
  )
}

/* 
*/
