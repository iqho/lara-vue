<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isAdminRoute = computed(() => route.meta.isAdmin);

// check route have meta isAdmin true
if (isAdminRoute.value !== true) {
    window.location.href = "/";
}
</script>
<template>
    <div v-if="isAdminRoute">
        <div class="container mx-auto">
            <nav class="flex justify-between items-center py-4">
                <div>
                    <router-link
                        to="/"
                        class="text-gray-900 text-3xl font-semibold"
                        >Admin</router-link
                    >
                </div>
                <div>
                    <router-link to="/" class="text-gray-900">Home</router-link>
                    <router-link to="/about" class="ml-6 text-gray-900"
                        >About</router-link
                    >
                    <router-link to="/admin" class="ml-6 text-gray-900"
                        >Admin</router-link
                    >
                    <router-link to="/admin/users" class="ml-6 text-gray-900"
                        >Users</router-link
                    >
                </div>
            </nav>
            <router-view />
        </div>
    </div>
</template>
