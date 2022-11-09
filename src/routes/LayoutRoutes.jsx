import React from 'react'
import { Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import Main from '../pages/main/Main'

const LayouRoutes = () => {
	const access = localStorage.getItem('accessToken')
	const isActivated = !!localStorage.getItem('isActivated')
	const naviate = useNavigate()

	if(!access & !isActivated) return (
		<div className='not-auth'>
			<h1>Not Auth</h1>
			<Link to='/auth/register'>Go to register</Link>
		</div>
	)

	return (
		<Routes>
			<Route path='/' element={<Main/>}/>
			<Route path='/admin' element={<Admin/>}/>
      <Route path='*' element={<Navigate to='/'/>} />
		</Routes>
	)
}

export default LayouRoutes