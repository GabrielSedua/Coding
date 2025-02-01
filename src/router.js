import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import NoteApp from './components/NoteApp.vue'; // Main app component
import Home from './components/Home.vue'; // Home page
import About from './components/About.vue'; // About page
import CompleteCodeEditor from './components/CompleteCodeEditor.vue'; // New editor page
import NotFound from './components/NotFound.vue'; // 404 page for undefined routes

// Define the routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home, // Home page (e.g., list of notes)
  },
  {
    path: '/about',
    name: 'about',
    component: About, // About page (information about the app)
  },
  {
    path: '/note-app',
    name: 'note-app',
    component: NoteApp, // Main app entry point (e.g., code editor)
  },
  {
    path: '/complete-code-editor',
    name: 'complete-code-editor',
    component: CompleteCodeEditor, // The new complete code editor page
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound, // Catch-all for undefined routes (404)
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // History mode for better URLs
  routes, // Define the routes for the app
});

export default router;
