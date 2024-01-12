import { defineStore } from 'pinia'
import axios from 'axios'

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
            this.users = data.users
        },
        async getUser(id) {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`)
            const data = await response.json()
            return data.user
        },

        // create new user
        async createUser(user) {

            try{
                const response = await axios.post('http://127.0.0.1:8000/api/users', user)
                return response.data
            }catch (e) {
                return e.response.data
            }
        },

        async updateUser(id, user) {

            try{
                const response = await axios.put(`http://127.0.0.1:8000/api/users/${id}`, user)
                return response.data
            }catch (e) {
                return e.response.data
            }
        },

        // delete user
        async deleteUser(id) {
            try{
                const response = await axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
                return response.data
            }catch (e) {
                return e.response.data
            }
        }

    },
});
