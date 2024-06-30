import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div className="container mt-4">
      <nav className="nav nav-pills flex-column flex-sm-row mb-4">
        <Link to="/newpost/1" className="flex-sm-fill text-sm-center nav-link">PostPage1</Link>
        <Link to="/postpage/1" className="flex-sm-fill text-sm-center nav-link">PostPage1</Link>
        <Link to="/postpage/newpost" className="flex-sm-fill text-sm-center nav-link">NewPost</Link>
        <Link to="/newpost/2" className="flex-sm-fill text-sm-center nav-link">PostPage 2</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default PostLayout