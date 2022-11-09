import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Auth from '../pages/auth/Auth'
import Register from '../pages/register/Register'

const AuthRoutes = () => {
	const user = localStorage.getItem('accessToken')
	const isActivated = !!localStorage.getItem('isActivated')
	const navigate = useNavigate()

	const goToMain = () => navigate('/')

	if(user & isActivated) goToMain()

	return (
		<Routes>
			<Route path='/login' element={<Auth/>}/>
			<Route path='/register' element={<Register/>}/>
			<Route path='*' element={<Navigate to='/auth/register'/>}/>
		</Routes>
	)
}

export default AuthRoutes