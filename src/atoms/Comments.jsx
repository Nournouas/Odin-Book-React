import ISOtoReadable from "../helpers/ISOtoreadable"
import DateText from "./DateText"


export default function Comments({comments}) {
  let commentsList = comments.map((comment) => {
    return(
      <div key={comment.id} className="flex flex-col gap-2">
        <h5 className="font-semibold">{comment.author.name}</h5>
        <div className="flex flex-col gap-1 bg-gray-50 p-2">
          <p>{comment.body}</p>
          <DateText date={ISOtoReadable(comment.createdAt)}/>
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
