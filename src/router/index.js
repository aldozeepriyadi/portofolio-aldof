import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';

// Definisikan rute
const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
];

// Buat instance router dengan history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
