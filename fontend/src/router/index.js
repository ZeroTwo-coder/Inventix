import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/statistic',
            name: 'statistic',
            component: () => import('@/views/StatisticView.vue')
        },
        {
            path: '/bookmark',
            name: 'bookmark',
            component: () => import('@/views/BookmarkView.vue')
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import('@/views/ReviewsView.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('@/views/NewsView.vue')
        }
    ]
})

export default router
