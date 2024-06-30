import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from "./api/Posts";
import useWindowSize from './hooks/useWindowSize';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Missing from './Components/Missing';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import EditPost from './Components/EditPost';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const { width } = useWindowSize();
  const [post, setPost] = useState([]);
  const [Edittitle, setEdittitle] = useState("");
  const [Editbody, setEditBody] = useState("");
  const [postBody, setPostBody] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await api.get("/posts");
        setPost(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchdata();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postlist = post.filter(pos => pos.id !== id);
      setPost(postlist);
      navigate("/");
    } catch (err) {
      console.error(`Error deleting post with id ${id}:`, err);
    }
  };

  const handleUpdate = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: Edittitle, datetime, body: Editbody };

    try {
      await api.put(`/posts/${id}`, updatedPost);
      setPost(post.map(pos => (pos.id === id ? { ...updatedPost } : pos)));
      setEdittitle('');
      setEditBody('');
      navigate(`/post/${id}`);
    } catch (err) {
      console.error(`Error updating post with id ${id}:`, err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    try {
      await api.post('/posts', newPost);
      const allPosts = [...post, newPost];
      setPost(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.error('Error creating new post:', err);
    }
  };

  useEffect(() => {
    const filteredResults = post.filter((post) => (
      (post.body.toLowerCase()).includes(search.toLowerCase()) ||
      (post.title.toLowerCase()).includes(search.toLowerCase())
    ));

    setSearchResults(filteredResults.reverse());
  }, [post, search]);

  return (
    <div className="App container">
      <Header width={width} />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home post={searchResults} />} />
        <Route path="*" element={<Missing />} />

        <Route path="post">
          <Route index element={<NewPost
            postBody={postBody}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />} />
          <Route path=":id" element={<PostPage post={post} handleDelete={handleDelete} />} />
        </Route>
        <Route path="edit/:id" element={<EditPost
          posts={post}
          Editbody={Editbody}
          Edittitle={Edittitle}
          setEditBody={setEditBody}
          setEdittitle={setEdittitle}
          handleUpdate={handleUpdate}
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
