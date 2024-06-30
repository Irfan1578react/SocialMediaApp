import React, { useState } from 'react';
import EditPost from './EditPost'; // Adjust the import path as necessary

const Parent = () => {
  const [Edittitle, setEdititle] = useState('');
  const [Editbody, setEditbody] = useState('');
  const [posts, setPosts] = useState([
    { id: '1', title: 'Post 1', body: 'Body 1' },
    { id: '2', title: 'Post 2', body: 'Body 2' },
  ]);

  const handleUpdate = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, title: Edittitle, body: Editbody } : post
    );
    setPosts(updatedPosts);
    console.log(`Updated post with id: ${id}`);
  };

  return (
    <EditPost
      Edittitle={Edittitle}
      setEdititle={setEdititle}
      Editbody={Editbody}
      setEditbody={setEditbody}
      handleUpdate={handleUpdate}
      post={posts}
    />
  );
};

export default Parent;
