<template>
    <div>
        <h1 class="text-3xl mb-4 inline-flex">Show User</h1>

        <router-link
            :to="{ name: 'admin.users.index' }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
        >
            Back
        </router-link>

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
                readonly
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
                readonly
                autocomplete="email"
                placeholder="Enter email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../../../store";

const store = useStore();
const router = useRouter();
const user = ref({});

onMounted(async () => {
    const id = Number(router.currentRoute.value.params.id);
    user.value = await store.getUser(id);
});
</script>
