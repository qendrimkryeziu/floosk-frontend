import { createSlice } from '@reduxjs/toolkit';

const data = localStorage.getItem('portfolio_token') ? JSON.parse(localStorage.getItem('portfolio_token')) : null
const isLogin = localStorage.getItem('isLogged')
const initialState = {
    data,
    isLogin,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('portfolio_token', JSON.stringify(action.payload.token))
            state.data = action.payload
            
            state.isLogin = true
            localStorage.setItem('isLogged', JSON.stringify(isLogin))
        },
        logout: (state) => {
            localStorage.removeItem('portfolio_token')
            state.data = null
            localStorage.setItem('isLogged', JSON.stringify(isLogin))
            state.isLogin = false
        }
    }
});

export const { login, logout } = authSlice.actions
export default authSlice.reducer