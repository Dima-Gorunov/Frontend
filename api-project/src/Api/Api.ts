import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'X-Custom-Header': 'foobar'}
})


export const ProfileApi = {
    getProfile(id: number) {
        return instance.get(`users/${id}`)
    },
    getPosts(id: number) {
        return instance.get(`posts?userId=${id}`)
    }
}

export const PostApi = {
    getPost(limit = 10, page = 1) {
        return instance.get(`posts?_limit=${limit}`)
    },
    getOnePost(userId: number, postId: number) {
        return instance.get(`users/${userId}/posts?id=${postId}`)
    }
}

export const UsersApi = {
    getUsers() {
        return instance.get(`users`).then(response => response.data)
    }
}

