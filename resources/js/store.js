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
            const response = await window.axios.get('/users')
            const data = response.data
            this.users = data.data
        },

        async getUser(id) {
            const response = await window.axios.get(`/users/${id}`)
            const data = response.data
            return data.data
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
