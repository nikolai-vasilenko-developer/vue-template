import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import {MainPage} from "pages/MainPage";

const routes: ReadonlyArray<RouteRecordRaw> = [
    {
        name: 'main',
        path: '/',
        component: MainPage,
    },

];

export const router: Router = createRouter({
    routes: routes,
    history: createWebHistory('/'),
});
