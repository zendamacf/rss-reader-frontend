import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import FlashMessage from '@smartweb/vue-flash-message'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false
Vue.prototype.moment = moment

Vue.use(FlashMessage, {
  time: 3000
})
axios.defaults.baseURL = process.env.VUE_APP_FLASK_API_ENDPOINT

const token = localStorage.getItem('user-token')
if (token && token !== 'undefined') {
  axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    axios.interceptors.response.use(response => response,
      (error) => { // eslint-disable-line arrow-body-style
        return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
          /* eslint no-underscore-dangle: ["error", { "allow": ["__isRetryRequest"] }] */
          if (error.response.status === 401) {
            localStorage.removeItem('user-token')
            this.$router.push('/login')
          }
          throw error
        })
      })
  }
}).$mount('#app')
