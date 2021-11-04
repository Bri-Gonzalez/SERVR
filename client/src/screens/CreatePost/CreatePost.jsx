import './CreatePost.css'
import { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { postPost } from '../../services/posts'


function CreatePost() {
  const {server_id} = useParams()
  const [isCreated, setCreated] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    server_id: Number(server_id)
  })

  const { title, text, image } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCreatePost = async (formData) => {
    const postData = await postPost(formData)
    setCreated({postData})
  }

  if (isCreated) {
    return <Redirect to={`/server/${server_id}`} />
  }

  return (
    <div>
      <p>Create a Post</p>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleCreatePost(formData)
      }}>
        <label>
          <input
            autoFocus
            required
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
          <br />
          Title
        </label>
        <textarea
          type='text'
          name='text'
          value={text}
          placeholder='Text (optional)'
          onChange={handleChange}
        />
        <label>
          <input
            type='text'
            name='image'
            value={image}
            onChange={handleChange}
          />
          <br />
          Image URL
        </label>
        <button>Post</button>
      </form>
    </div>
  )
}

export default CreatePost
