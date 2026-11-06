import React, { useEffect, useState } from 'react';
import fetchHelper from '../helpers/fetchHelper';
import ListOfPosts from '../atoms/ListOfPosts';

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    const result = await fetchHelper("http://localhost:3000/post/all", "GET", {}, true);
    setAllPosts(result.posts);
  };

  useEffect(() => {
    getAllPosts();
  }, [allPosts]);



  return (
    <div className='flex flex-col items-center min-h-screen px-4 md:px-0 py-10 md:py-20 bg-gray-200'>
      <ListOfPosts refreshPosts={getAllPosts} allPosts={allPosts}/>
    </div>
  )
}
