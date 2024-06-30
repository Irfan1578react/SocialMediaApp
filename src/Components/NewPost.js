import React, { useEffect } from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  useEffect(() => {
     const forms = document.querySelectorAll('.needs-validation')

     Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, [])

  return (
    <main className='container mt-5'>
      <h2 className='mb-4'>New Post</h2>
      <form className='needs-validation' onSubmit={handleSubmit} noValidate>
        <div className='mb-3'>
          <label htmlFor='postTitle' className='form-label'>Title:</label>
          <input 
            id="postTitle"
            type="text"
            className='form-control'
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <div className='invalid-feedback'>
            Please provide a title.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='postBody' className='form-label'>Post:</label>
          <textarea 
            id="postBody"
            className='form-control'
            rows='5'
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
          <div className='invalid-feedback'>
            Please provide post content.
          </div>
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost