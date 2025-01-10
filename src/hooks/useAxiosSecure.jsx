import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4545',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.status === 401 || error.status === 403) {
                    return logoutUser()
                        .then(() => {
                            navigate('/login')
                        })
                }
                return Promise.reject(error)
            }
        )
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;