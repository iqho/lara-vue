<template>
    <div>
        <h1 class="text-3xl mb-4">Update User</h1>

        <div
            v-if="success"
            class="bg-green-100 my-2 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <span class="block sm:inline ms-2">User Updated Successfully.</span>
        </div>

        <!-- Display validation errors -->
        <div v-if="error" class="mb-4">
            <div
                v-for="(error, key) in errors"
                :key="key"
                class="bg-red-100 my-2 border border-red-400 text-red-700 px-4 py-1 rounded relative"
                role="alert"
            >
                <ul>
                    <li v-for="message in error" :key="message">
                        {{ message }}
                    </li>
                </ul>
            </div>
        </div>

        <form @submit.prevent="updateUser">
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                >
                    Name
                </label>
                <input
                    v-model="user.name"
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                >
                    Email
                </label>
                <input
                    v-model="user.email"
                    type="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Enter email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    v-model="user.password"
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    autocomplete="new-password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password_confirmation"
                >
                    Confirm Password
                </label>
                <input
                    v-model="user.password_confirmation"
                    type="password"
                    autocomplete="new-password"
                    id="password_confirmation"
                    placeholder="Enter password confirmation"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Update User
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../../store";

const store = useStore();
const router = useRouter();
const user = ref({});
const error = ref(false);
const success = ref(false);
const message = ref("");
const errors = ref({});

// Update User
const updateUser = async () => {
    // Reset success and errors
    success.value = false;
    error.value = false;
    try {
        const res = await store.updateUser(user.value.id, user.value);
        if (res.status == "success") {
            success.value = true;
            message.value = res.message;
        }

        if (res.status == "error") {
            error.value = true;
            errors.value = res.errors;
        }
    } catch (err) {
        console.log("errors", err);
    }
};

onMounted(async () => {
    const id = Number(router.currentRoute.value.params.id);
    user.value = await store.getUser(id);
});
</script>
