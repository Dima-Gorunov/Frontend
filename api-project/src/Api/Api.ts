import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {'X-Custom-Header': 'foobar'}
})


export const ProfileApi = {
    getProfile(id: number) {
        return instance.get(`users/${id}`)
    },
    getPosts(id:number){
        return instance.get(`posts?userId=${id}`)
    }
}


export const PostApi = {
    getPost(limit = 10, page = 1) {
        return instance.get(`posts?_limit=${limit}`)
    }
}


export const UsersApi = {
    getUsers(limit = 100, page = 1) {

        return instance.get(`users`).then(response => response.data)
    }
}

