import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap untuk styling
import 'animate.css'; // Animate.css untuk animasi
const app = createApp(App);

// Pasang router ke aplikasi
app.use(router);

// Mount aplikasi ke elemen #app
app.mount('#app');
