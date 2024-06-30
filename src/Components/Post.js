import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='card mb-3'>
      <div className='card-body'>
        <Link to={`post/${post.id}`} className='text-decoration-none'>
          <h2 className='card-title text-primary'>{post.title}</h2>
          <p className='card-subtitle mb-2 text-muted'>{post.datetime}</p>
        </Link>  
        <p className='card-text'>
          {post.body.length <= 25 
            ? post.body
            : `${post.body.slice(0, 25)}...`
          }
        </p>
        <Link to={`post/${post.id}`} className='btn btn-primary'>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default Post