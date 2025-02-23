// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router.js

createApp(App)
  .use(router) // Use Vue Router
  .mount('#app');
