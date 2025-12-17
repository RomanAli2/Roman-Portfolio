import { createMemoryHistory, createRouter } from 'vue-router'

import HeroSection  from '../components/hero-section.vue'
import About  from '../components/About-Page.vue'

const routes = [
  { path: '/', component: HeroSection  },
  { path: '/About-Page', component: About  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})