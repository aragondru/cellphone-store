import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import VuePaginate from 'vue-paginate';

export const eventBus = new Vue()

Vue.use(firestorePlugin)
Vue.use(VuePaginate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
