<template>
    <div>
        <router-view />
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Admin from "./layouts/AdminDashboardLayout.vue";
import Frontend from "./layouts/FrontendLayout.vue";

const route = useRoute();
const isAdminRoute = computed(() => route.meta.isAdmin);

const layoutComponent = computed(() => (isAdminRoute.value ? Admin : Frontend));

const title = computed(() => {
    const base = "Laravel Vue 3 SPA";
    return route.meta.title ? `${route.meta.title} | ${base}` : base;
});

document.title = title.value;
</script>

<style scoped>
.router-link-exact-active {
    color: red;
}
</style>
