import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes";

const app = createApp(App);

router.beforeEach((to, from, next) => {
    const base = "Laravel Vue 3 SPA";
    document.title = to.meta?.title ? `${to.meta.title} | ${base}` : base;
    next();
});

app.use(router);
app.use(createPinia());
app.mount("#app");
