import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TheNotification from "./components/TheNotification.vue";

const app = createApp(App);

app.use(store);

app.use(router)

app.component("the-notification", TheNotification);

app.mount("#app");