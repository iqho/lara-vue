<template>
    <div>
        <div v-if="success">
            <div
                class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
            >
                <span class="block sm:inline">User Deleted Successfully.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                        @click="success = false"
                        class="fill-current h-6 w-6 text-green-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1 1 0 01-1.414 0L10
                            11.414l-2.93 2.93a1 1 0 01-1.414
                            0l-.707-.707a1 1 0 010-1.414l2.93-2.93-2.93-2.93a1
                            1 0 010-1.414l.707-.707a1 1 0 011.414
                            0l2.93 2.93 2.93-2.93a1 1 0 011.414
                            0l.707.707a1 1 0 010 1.414l-2.93 2.93 2.93
                            2.93a1 1 0 010 1.414l-.707.707z"
                        />
                    </svg>
                </span>
            </div>
        </div>

        <table class="table-auto">
            <thead>
                <tr>
                    <td colspan="2">
                        <h1
                            class="text-[28px] inline-flex border-b-2 px-3 border-red-900"
                        >
                            User List
                        </h1>
                    </td>
                    <td colspan="2">
                        <router-link
                            :to="{ name: 'admin.users.create' }"
                            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right"
                        >
                            Create User
                        </router-link>
                    </td>
                </tr>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="border px-4 py-2">{{ user.id }}</td>
                    <td class="border px-4 py-2">{{ user.name }}</td>
                    <td class="border px-4 py-2">{{ user.email }}</td>
                    <td class="border px-4 py-2">
                        <router-link
                            :to="{
                                name: 'admin.users.show',
                                params: { id: user.id },
                            }"
                            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-1"
                        >
                            View
                        </router-link>

                        <router-link
                            :to="{
                                name: 'admin.users.edit',
                                params: { id: user.id },
                            }"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1"
                        >
                            Edit
                        </router-link>
                        <button
                            to="#"
                            @click="deleteUser(user.id)"
                            class="bg-red-500 hover:bg-red-700 text-white font-bold rounded"
                            style="padding: 5px 12px"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "../../../store";
import AboutVue from "../../../components/About.vue";

const store = useStore();
const users = ref([]);
const success = ref(false);

const deleteUser = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
        await store.deleteUser(id);
        users.value = store.users;
        users.value = users.value.filter((user) => user.id !== id);
        success.value = true;

        setTimeout(() => {
            success.value = false;
        }, 5000);
    }
};

onMounted(async () => {
    await store.getUsers();
    users.value = store.users;
});
</script>
