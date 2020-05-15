import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import './stylus/base/base.styl'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
