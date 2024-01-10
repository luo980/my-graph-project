import { createRouter, createWebHashHistory } from 'vue-router'
import definition from '../views/definition.vue'
import pipeline from '../views/pipeline.vue'
import generation from '../views/generation.vue'

const routes = [
  { path: '/definition', component: definition },
  { path: '/pipeline', component: pipeline },
  { path: '/generation', component: generation }
  // 其他路由...
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
