import {createRouter, createWebHistory,} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import MoviePage from "@/pages/MoviePage.vue";

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: MoviePage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' })
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
