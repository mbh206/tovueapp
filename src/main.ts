import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import ContactPage from './pages/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
