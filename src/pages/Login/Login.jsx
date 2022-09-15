import React from 'react'
import LoginForm from '../../components/User/Login/Login'
import {api, endpoints } from '../../lib/api'

import {login} from '../../lib/store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = async (data) => {
        const config = {
            data,
        }
        const result = await api.call(endpoints.login, config)
        if(!result.success) {
            console.log("error")
            return
        }
        dispatch(login(result.data))
        navigate('/education')
    }

  return (

    <LoginForm setMessage={"s"} submit={submit} />
  )
}

export default Login