import React, { useState } from 'react'
import PostCard from './PostCard';
import PostForm from './forms/PostForm';
import Divider from './Divider';
import fetchHelper from '../helpers/fetchHelper';
import { ClipLoader } from "react-spinners";

export default function ListOfPosts({allPosts=[] , refreshPosts}) {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmitPost = async (e) => {
    setLoading(true);
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value
    const result = await fetchHelper("http://localhost:3000/post/", "POST", {title, body}, true)
    setLoading(false);
    if (!result.errors){
    refreshPosts();
    }else{
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc
      }, {});
      setErrors(errorsObj);
    }
  }

  const listOfPosts = allPosts.map((post) => {
    if (allPosts.length > 0){
      return (
      <PostCard refreshPosts={refreshPosts} key={post.id} post={post} />
    )}else{
      return (
        <h3>There are no posts at the moment, be the first to make one!</h3>
      )
    }
  });

  return (
    <div className='flex flex-col gap-10 md:max-w-150 w-full h-full'>
      {loading ? 
        <ClipLoader
          color="000000"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"/> 
      : <PostForm errors={errors} handleSubmit={handleSubmitPost} />
      }
      
      <Divider />
      {listOfPosts}
    </div>
    
  )
  
}
