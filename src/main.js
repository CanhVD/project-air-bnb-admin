import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TheNotification from "./components/TheNotification.vue";
import Dropdown from "./components/Dropdown.vue";

const app = createApp(App);

app.use(store);

app.use(router)

app.component("the-notification", TheNotification);
app.component("drop-down", Dropdown);

app.mount("#app");