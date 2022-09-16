import { publicRequest } from "../hooks/requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import { useNavigate } from 'react-router-dom';

export const login = async(dispatch, user) => {

    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)

        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}