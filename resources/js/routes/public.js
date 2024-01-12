export const publicRoutes = [
    {
        path: "/",
        component: () => import("../layouts/FrontendLayout.vue"),
        meta: {
            title: "Frontend - Example App",
            isAdmin: false,
        },
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../components/Home.vue"),
                meta: {
                    title: "Home",
                    isAdmin: false,
                },
            },
            {
                path: "/about",
                name: "about",
                component: () => import("../components/About.vue"),
                meta: {
                    title: "About",
                    isAdmin: false,
                },
            },
            {
                path: "/counter",
                name: "counter",
                component: () => import("../views/Counter.vue"),
                meta: {
                    title: "Counter",
                    isAdmin: false,
                },
            },
        ],
    },
];
