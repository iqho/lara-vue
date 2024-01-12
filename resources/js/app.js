import './bootstrap';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createPinia } from 'pinia'

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
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./views/Login.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('./views/Register.vue'),
                },
                {
                    path: '/counter',
                    name: 'counter',
                    component: () => import('./views/Counter.vue'),
                }
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
                    component: () => import('./views/admin/Dashboard.vue'),
                },
                {
                    path: 'users',
                    name: 'admin.users.index',
                    component: () => import('./views/admin/users/Index.vue'),
                },
                {
                    path: 'users/:id',
                    name: 'admin.users.show',
                    component: () => import('./views/admin/users/Show.vue'),
                },
                {
                    path: 'users/:id/edit',
                    name: 'admin.users.edit',
                    component: () => import('./views/admin/users/Edit.vue'),
                },
                {
                    path: 'users/create',
                    name: 'admin.users.create',
                    component: () => import('./views/admin/users/Create.vue'),
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
app.use(createPinia())
app.mount('#app');
