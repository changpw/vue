import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routers} from "@/router";
import Vant from 'vant'
import 'vant/lib/index.css';
import {menu_request} from "@/network/request"
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip=true;
const router=new VueRouter({
  routes:routers
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// axios.get("/test/2222")
//     .then(res=>{
//       console.log(res)
//     })
//     .catch(err=>{
//       console.log(err)
//     })
menu_request({
  url:"/test/100"
},ret => {
  console.log(ret)
},err => {
  console.log(err)
})
