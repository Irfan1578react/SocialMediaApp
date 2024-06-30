import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../api/Posts';

const EditPost = ({ posts, Editbody, Edittitle, setEditBody, setEdittitle, handleUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const post = posts.find(post => post.id.toString() === id);
    if (post) {
      setEdittitle(post.title);
      setEditBody(post.body);
    } else {
      setError('Post not found');
    }
    setLoading(false);
  }, [id, posts, setEditBody, setEdittitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={Edittitle}
            onChange={(e) => setEdittitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body_</label>
          <textarea
            className="form-control"
            id="body"
            rows="5"
            required
            value={Editbody}
            onChange={(e) => setEditBody(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

EditPost.propTypes = {
  posts: PropTypes.array.isRequired,
  Editbody: PropTypes.string.isRequired,
  Edittitle: PropTypes.string.isRequired,
  setEditBody: PropTypes.func.isRequired,
  setEdittitle: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default EditPost;
