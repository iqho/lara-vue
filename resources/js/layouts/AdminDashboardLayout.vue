<template>
    <div v-if="isAdminRoute">
        <div class="container mx-auto">
            <div class="flex">

                <!-- Side Menu (1st column) -->
                <div id="showMenu" class="bg-gray-200 p-4 max-w-[250px] w-[30%] hidden md:block h-screen">
                    <!-- Content for the side menu -->

                    <!-- menu list item  -->
                    <div class="mb-4">
                        <router-link :to="{ name: 'admin.home' }" class=" block p-2 rounded hover:bg-gray-300">
                            <i class="fas fa-tachometer-alt"></i>
                            <span class="ml-2">Dashboard</span>
                        </router-link>

                        <router-link :to="{ name: 'admin.users.index' }" class="block p-2 rounded hover:bg-gray-300">
                            <i class="fas fa-users"></i>
                            <span class="ml-2">Users</span>
                        </router-link>

                        <!-- <router-link to="/admin/posts" class="block p-2 rounded hover:bg-gray-300">
                            <i class="fas fa-blog"></i>
                            <span class="ml-2">Posts</span>
                        </router-link> -->
                    </div>

                </div>
                <!-- Toggle Button (visible on small screens) -->


                <!-- Main Content (2nd column) -->
                <div class="flex-grow w-[70%]">

                    <!-- make a top sticky bar -->
                    <div class="bg-gray-200 p-4">
                        <div class="flex justify-between">
                            <div class="flex">
                                <button class="md:hidden bg-gray-200 p-2 h-12" @click="toggleSideMenu">
                                    <i id="toggleButton" class="fas fa-bars"></i>
                                </button>
                                <div class="mr-4">
                                    <img class="h-10 w-10 rounded-full" src="https://picsum.photos/200/300" alt="Avatar">
                                </div>
                                <div>
                                    <div class="font-bold mt-2">Laravel Vue Admin</div>
                                </div>
                            </div>
                            <div class="flex mt-2">
                                <div class="mr-4">
                                    <router-link to="/" class="bg-gray-300 p-2 rounded-full">
                                        <i class="fas fa-globe"></i>
                                    </router-link>
                                </div>
                                <div class="mr-4">
                                    <router-link to="/" class="bg-gray-300 p-2 rounded-full">
                                        <i class="fas fa-bell"></i>
                                    </router-link>
                                </div>
                                <div>
                                    <router-link to="/" class="bg-gray-300 p-2 rounded-full">
                                        <i class="fas fa-sign-out-alt"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content for the main section -->
                    <div class="p-4">
                        <router-view />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const route = useRoute();
const isAdminRoute = computed(() => route.meta.isAdmin);

// check route has meta isAdmin true
if (isAdminRoute.value !== true) {
    window.location.href = "/";
}

const toggleSideMenu = () => {
    // toggle side menu
    const showMenu = document.getElementById("showMenu");
    showMenu.classList.toggle("hidden");

    // toggle button icon
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.classList.toggle("fa-bars");
    toggleButton.classList.toggle("fa-times");

};

</script>
