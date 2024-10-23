import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from './views/about.vue'
import HomePage from './views/index.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Usage
// this.$router.push('/about')
// const router = useRouter()
// const route = useRoute()
