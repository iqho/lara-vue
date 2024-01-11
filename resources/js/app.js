import './bootstrap';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./layouts/FrontendLayout.vue'),
            meta: {
                title: 'Frontend - Example App',
                isAdmin: false,
            },
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('./components/Home.vue'),
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('./components/About.vue'),
                },
            ],
        },

        // Admin routes
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./layouts/AdminDashboardLayout.vue'),
            meta: {
                title: 'Admin - Example App',
                isAdmin: true,
            },
            children: [
                {
                    path: '',
                    name: 'admin.home',
                    component: () => import('./components/AdminHome.vue'),
                },
                {
                    path: 'users',
                    name: 'admin.users',
                    component: () => import('./components/AdminUser.vue'),
                },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta?.title ?? 'Example App';
    next()
});

app.use(router);
app.mount('#app');
