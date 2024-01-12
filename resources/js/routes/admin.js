export const adminRoutes = [
    {
        path: "/admin",
        name: "admin",
        component: () => import("../layouts/AdminDashboardLayout.vue"),
        meta: {
            title: "Admin - Example App",
            isAdmin: true,
        },
        children: [
            {
                path: "",
                name: "admin.home",
                component: () => import("../views/admin/Dashboard.vue"),
            },
            {
                path: "users",
                name: "admin.users.index",
                component: () => import("../views/admin/users/Index.vue"),
            },
            {
                path: "users/:id",
                name: "admin.users.show",
                component: () => import("../views/admin/users/Show.vue"),
            },
            {
                path: "users/:id/edit",
                name: "admin.users.edit",
                component: () => import("../views/admin/users/Edit.vue"),
            },
            {
                path: "users/create",
                name: "admin.users.create",
                component: () => import("../views/admin/users/Create.vue"),
            },
        ],
    },
];
