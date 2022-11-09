import React, { useState } from 'react'
import './Auth.scss'
import { getAuth } from '../../API/index';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()

  const handleAuth = (e) => {
    e.preventDefault()
    if(email !== '' && password !== ''){
      getAuth({email , password})
      .then(res => {
          if(res){
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
            localStorage.setItem('user' , JSON.stringify(res.user))
            if(res.user.isActivated){
              localStorage.setItem('isActivated' , res.user.isActivated)
            }
              navigate('/')
          }
      })
    }

  
  }

  return (
    <div className='container'>
      <div className='register_card'>
        <h4>Authorization</h4>
        <hr />

        <form>
          <div>
            <input type='email' placeholder='Email *' defaultValue={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <input type='password' placeholder='Password *' defaultValue={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        <div className='register_btn'>
          <button onClick={handleAuth} className='btn_primary'>Authorization</button>
        </div>

        <div className='link_register'>
          <Link to='/auth/register'>Create a new account</Link>
        </div>
      </div>
    </div>
  )
}

export default Register