import { createRouter, createWebHistory } from 'vue-router';
import CounterPage from './pages/counter/CounterPage.vue';
import ContentsPage from './pages/contents/ContentsPage.vue';
import NotFoundPage from './pages/notfound/NotFoundPage.vue';

const routes = [
  { path: '/', component: CounterPage },
  { path: '/contents', component: ContentsPage },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
