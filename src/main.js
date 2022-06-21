import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
