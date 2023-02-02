import { createRouter, createWebHistory, } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import SinglePost from './pages/SinglePost.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:"/",
            name:"hompage",
            component: HomePage,
        },
        {
            path:"/blog/:type",
            name:"single-post",
            component: SinglePost,
        },
    ]
})

export default router;