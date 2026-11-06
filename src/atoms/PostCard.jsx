import React, { useState } from 'react'
import ISOtoReadable from '../helpers/ISOtoreadable'
import Comments from './Comments'
import Divider from './Divider';
import DateText from './DateText';
import CommentForm from './forms/CommentForm';
import { ClipLoader } from "react-spinners";
import fetchHelper from '../helpers/fetchHelper';
import { deleteIcn } from '../helpers/HeroIcons';

export default function PostCard({post, refreshPosts}) {
  const [showComments, setShowComments] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const userID = localStorage.getItem("userID");
  const isMyPost = userID == post.author.id

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = e.target.body.value;
    const postID = post.id;
    const result = await fetchHelper("http://localhost:3000/comment/", "POST", {postID, body}, true);
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

  let handleToggleComments = () => {
    setShowComments(!showComments);
  }

  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-xl'>
      <div className='w-full flex flex-row justify-between'>
        <h2 className='font-bold text-xl'>{post.title}</h2>
        {isMyPost && <button onClick={() => console.log("deleted")} className='text-red-950 cursor-pointer hover:text-red-800'>{deleteIcn}</button>}
      </div>

      <div>
        <h3 className='text-xs font-semibold'>{post.author.name}</h3>
        <DateText date={ISOtoReadable(post.createdAt)} />
      </div>
      <Divider />
      <div className=' p-4 rounded-sm flex flex-col gap-2'>
        <p>{post.body}</p>        
      </div>
      {showComments 
      ? <button className='self-end' onClick={handleToggleComments}>
        <span className='cursor-pointer hover:underline text-sm font-semibold text-gray-400'>{post.comments.length} comments ↑</span>
        </button> 
      : <button className='self-end' onClick={handleToggleComments}>
        <span className='cursor-pointer hover:underline text-sm font-semibold text-gray-400'>{post.comments.length} comments ↓</span>
        </button>
      }
      {showComments && 
      <div className='flex flex-col gap-2'>
        {loading ?       
          <ClipLoader
            color="000000"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"/> 
            : <CommentForm handleCommentSubmit={handleCommentSubmit} errors={errors}/>
          }
        
        <Comments comments={post.comments}/>
      </div>
      }
    </div>
  )
}