import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "bef78338-1ca4-498f-9552-f41ad969c6e6"
    }
})

export const usersApi = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`)
    }
}


export const profileApi = {
    setProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    }
}
