import { useParams, Link } from 'react-router-dom';

const PostPage = ({ post, handleDelete }) => {
  const { id } = useParams();
  const post1 = post.find(post => post.id.toString() === id);

  return (
    <main className='container mt-5'>
      <div className='row'>
        {/* Left column */}
        {/* <div className='col-md-3'>
          <div className='card shadow mb-4'>
            <div className='card-body'>
              <h5 className='card-title'>Recent Posts</h5>
              <ul className='list-unstyled'>
                <li><a href='#'>Sample Post 1</a></li>
                <li><a href='#'>Sample Post 2</a></li>
                <li><a href='#'>Sample Post 3</a></li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Middle column (main content) */}
        <div className='col-md-6'>
          <article className='card shadow'>
            {post1 ? (
              <div className='card-body'>
                <h1 className='card-title display-4 mb-3'>{post1.title}</h1>
                <p className='text-muted mb-4'><small>{post1.datetime}</small></p>
                <p className='card-text lead mb-5'>{post1.body}</p>
                <div className='d-flex gap-2'>
                  <Link to={`/edit/${post1.id}`} className='btn btn-primary'>
                    <i className='bi bi-pencil me-2'></i>Edit Post
                  </Link>
                  <button onClick={() => handleDelete(post1.id)} className='btn btn-danger'>
                    <i className='bi bi-trash me-2'></i>Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className='card-body text-center'>
                <h1 className='card-title display-4 mb-4'>Oops! Looks like there's a problem.</h1>
                <p className='card-text lead mb-4'>We couldn't find the post you're looking for.</p>
                <Link to='/' className='btn btn-primary btn-lg'>
                  <i className='bi bi-house-door me-2'></i>Go to Home
                </Link>
              </div>
            )}
          </article>
        </div>

        {/* Right column */}
        <div className='col-md-3'>
          {/* <div className='card shadow mb-4'>
            <div className='card-body'>
              <h5 className='card-title'>Categories</h5>
              <ul className='list-unstyled'>
                <li><a href='#'>Category 1</a></li>
                <li><a href='#'>Category 2</a></li>
                <li><a href='#'>Category 3</a></li>
              </ul>
            </div>
          </div> */}
          <div className='card shadow'>
            <div className='card-body'>
              <h5 className='card-title'>About</h5>
              <p className='card-text'>This is a blog about various topics. Feel free to explore!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostPage;
