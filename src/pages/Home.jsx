import React, { useEffect, useState } from 'react';
import fetchHelper from '../helpers/fetchHelper';
import ListOfPosts from '../atoms/ListOfPosts';
import Navbar from '../atoms/Navbar';

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const result = await fetchHelper("http://localhost:3000/post/all", "GET", {}, true);
    setAllPosts(result.posts);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className='flex flex-col relative items-center min-h-screen px-4 md:px-0 py-10 pb-30 md:py-20 md:pb-40 bg-gray-200'>
      <ListOfPosts refreshPosts={getAllPosts} allPosts={allPosts}/>
      <Navbar />
    </div>
  )
}
