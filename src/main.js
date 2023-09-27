import Vue from 'vue'
import Element from 'element-ui'
import './assets/element-variables.scss'

import App from './App'
import router from './router'
Vue.use(Element);
// import './assets/icons' // icon
// import './permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium' // set element-ui default size
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
