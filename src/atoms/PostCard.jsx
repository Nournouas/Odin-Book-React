import React, { useState } from 'react'
import ISOtoReadable from '../helpers/ISOtoreadable'
import Comments from './Comments'
import Divider from './Divider';
import DateText from './DateText';
import CommentForm from './forms/CommentForm';

export default function PostCard({post}) {
  const [showComments, setShowComments] = useState(false);
  let handleToggleComments = () => {
    setShowComments(!showComments);
  }

  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-xl'>
      <h2 className='font-bold text-xl'>{post.title}</h2>
      <div>
        <h3 className='text-xs font-semibold'>{post.author.name}</h3>
        <DateText date={ISOtoReadable(post.createdAt)} />
      </div>
      <Divider />
      <div className='bg-gray-100 p-4 rounded-sm flex flex-col gap-2'>
        <p>{post.body}</p>        
      </div>
      {showComments 
      ? <button className='self-end' onClick={handleToggleComments}>
        <span className='text-sm'>{post.comments.length} comments ↑</span>
        </button> 
      : <button className='self-end' onClick={handleToggleComments}>
        <span className='text-sm'>{post.comments.length} comments ↓</span>
        </button>
      }
      {showComments && 
      <div className='flex flex-col gap-2'>
        <CommentForm />
        <Comments comments={post.comments}/>
      </div>
      }
    </div>
  )
}