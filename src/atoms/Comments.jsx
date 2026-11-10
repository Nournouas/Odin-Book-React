import ISOtoReadable from "../helpers/ISOtoreadable"
import DateText from "./DateText"
import { deleteIcn } from '../helpers/HeroIcons';
import fetchHelper from "../helpers/fetchHelper";


export default function Comments({comments, refreshPosts}) {
  const userID = localStorage.getItem("userID");
  
  const handleDeleteComment = async (commentObj) => {
    const result = await fetchHelper(`http://localhost:3000/comment/${commentObj.id}`, "DELETE", {}, true);
    if (!result.errors){
      refreshPosts();
    }else{
      alert("Could not delete comment")
    }
  }

  let commentsList = comments.map((comment) => {
    let isMyComment = comment.author.id == userID
    return(
      <div key={comment.id} className="flex flex-col gap-2">
        <h5 className="font-semibold">{comment.author.name}</h5>
        <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col gap-1 bg-gray-50 p-2">
              <p>{comment.body}</p>
              <DateText date={ISOtoReadable(comment.createdAt)}/>
            </div>
            {isMyComment && <button onClick={() => handleDeleteComment(comment)} className='text-red-950 cursor-pointer hover:text-red-800'>{deleteIcn}</button>}
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col gap-4">
      {commentsList}
    </div>
  )
}
