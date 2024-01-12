import { createWebHistory, createRouter } from "vue-router";
import { publicRoutes } from "./public";
import { adminRoutes } from "./admin";
import { authRoutes } from "./auth";

const routes = [...publicRoutes, ...adminRoutes, ...authRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
