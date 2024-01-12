<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="login">
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" />
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" />
            </div>

            <div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>
        </form>

        <div class="mt-3">
            <router-link to="/register">Register</router-link> |
            <router-link to="/">Home</router-link>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
    email: "",
    password: "",
});

const login = () => {
    console.log(form.value);
};
</script>
