import axios from 'axios';
import VueAxios from "vue-axios";

// import {createApp} from 'vue'
import {createApp as createAppInline} from 'vue/dist/vue.esm-bundler';
import App from './BrandMarkup.vue'
import components from '@/components/UI'

import './assets/scss/main.scss'
import store from './store'

const app = createAppInline({}).use(store).use(VueAxios, axios);

components.forEach(component => {
	app.component(component.name, component)
});

app.component('brand-markup', App)

app.mount('#app')
