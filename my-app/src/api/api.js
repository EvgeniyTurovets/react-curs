import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b323a22c-6ab1-4be2-9305-559ca7e9ff2d"
    } 
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instans.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUser(id){
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "b323a22c-6ab1-4be2-9305-559ca7e9ff2d"
            } 
        }).then(response => response.data)
    },
    followUser(id){
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "b323a22c-6ab1-4be2-9305-559ca7e9ff2d"
            } 
        }).then(response => response.data)
    }
}


