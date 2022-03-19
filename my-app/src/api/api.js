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
    unfollow(userId){
        return instans.delete(`follow/${userId}`)
    },
    follow(userId){
        return instans.post(`follow/${userId}`)
    },
    getProfile(userId){
        return instans.get(`profile/${userId}`)
    }
}

export const authApi = {
    me(){
        return instans.get(`auth/me`)
    }
}

