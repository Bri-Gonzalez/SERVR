import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='login-container'>
      <p>Welcome Back!</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleLogin(formData)
        }}
      >
        <label>
          <input
            autoFocus
            required
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
          <br />
          Username
        </label>
        <label>
          <input
            required
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          <br />
          Password
        </label>
        <button>Login</button>
      </form>
      <p>New to Server? <Link to='/join'>JOIN NOW</Link></p>
    </div>
  )
}

export default Login
