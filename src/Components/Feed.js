import React from 'react'
import Post from "./Post"

const Feed = ({post}) => {
  return (
    <>
        {post.map((pos) =>{
            return(
                <Post key={pos.id} post={pos} />
            )
        })}
      
    </>
  )
}



export default Feed
