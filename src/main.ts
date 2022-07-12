import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
