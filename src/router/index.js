import { createMemoryHistory, createRouter } from 'vue-router'

import HeroSection  from '../components/hero-section.vue'
import About  from '../components/About-Page.vue'
import ProjectPage from '../components/Project-page.vue'
import ResumePage from '../components/Resume-page.vue'
const routes = [
  { path: '/', component: HeroSection  },
  { path: '/About-Page', component: About  },
   { path: '/Project-page', component: ProjectPage  },
    { path: '/Resume-page', component: ResumePage  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})