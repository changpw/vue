import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App.vue';
import VueRouter from 'vue-router';
import routers from "@/router";
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueRouter);
const router=new VueRouter({
  routes:routers
})
Vue.config.productionTip=true;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
