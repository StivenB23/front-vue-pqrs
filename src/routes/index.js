import { createRouter, createWebHashHistory } from "vue-router"
import Login from "../components/Login.vue"
import ContainerPqrs from "../components/ContainerPqrs.vue"
import dashboard from "../layout/dashboard.vue"
import Profile from "../views/profile.vue"
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const routes = [
    {
        path: "/", component: Login
    },
    {
        path: "/dashboard", component: dashboard, redirect: { name: 'dashboard' }, children: [{
            path: '/profile',
            name: "dashboard",
            component: Profile,
            meta: {
                requiredAuth: true
            }
        }, {
            path: '/listPqrs',
            name: "listpqrs",
            component: ContainerPqrs,
            meta: {
                requiredAuth: true,
                requiredAuthRole: 'admin'
            }

        },]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiredAuth)) {
        if (!token) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
    
    if (to.matched.some(route => route.meta.requiredAuthRole)) {
        if (to.meta.requiredAuthRole == user.role) {
            next("/");
        } else {
            next();
        }
    } else {
        next();
    }
})


export { router }