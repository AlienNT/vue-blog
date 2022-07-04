import { createRouter, createWebHistory } from 'vue-router'
import VHomePage from '@/pages/VHomePage'
import VBlogPage from '@/pages/VBlogPage'
import VLoginPage from '@/pages/VLoginPage'
import VSignUpPage from '@/pages/VSignUpPage'
// import VLoginForm from '@/components/authComponents/VLoginForm'
// import VSignUpForm from '@/components/authComponents/VSignUpForm'

const routes = [
    {
        path: '/',
        name: 'home',
        component: VHomePage
    },
    {
        path: '/blog',
        name: 'blog',
        component: VBlogPage
    },
    {
        path: '/login',
        name: 'login',
        component: VLoginPage
    },
    {
        path: '/signup',
        name: 'signup',
        component: VSignUpPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
