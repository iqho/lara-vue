<template>
    <div>
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
                                name: 'admin.users.edit',
                                params: { id: user.id },
                            }"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1"
                        >
                            Edit
                        </router-link>
                        <button
                            @click="deleteUser(user.id)"
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

const deleteUser = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
        await store.deleteUser(id);
        users.value = store.users;
        users.value = users.value.filter((user) => user.id !== id);
    }
};

onMounted(async () => {
    await store.getUsers();
    users.value = store.users;
});
</script>
