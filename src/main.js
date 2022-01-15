import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Api from "./api/index"
import "@/permission"
import htmlToPdf from '@/utils/htmlToPdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(ElementUI)
Vue.prototype.$api=Api
store.dispatch('GenerateRoutes')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
