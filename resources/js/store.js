import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        count: 0,
        users: [],
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        async getUsers() {
            const response = await fetch('http://127.0.0.1:8000/api/users')
            const data = await response.json()
            this.users = data.data
        },
        async getUser(id) {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`)
            const data = await response.json()
            return data.user
        },

        // create new user
        async createUser(user) {

            try{
                const response = await window.axios.post('/users', user)
                return response.data
            }catch (e) {
                return e.response.data
            }
        },

        async updateUser(id, user) {

            try{
                const response = await window.axios.put(`/users/${id}`, user)
                return response.data
            }catch (e) {
                return e.response.data
            }
        },

        // delete user
        async deleteUser(id) {
            try{
                const response = await window.axios.delete(`/users/${id}`)
                return response.data
            }catch (e) {
                return e.response.data
            }
        }

    },
});
