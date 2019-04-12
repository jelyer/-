// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import ElementUI from 'element-ui'
import  axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router';
import echarts from 'echarts';
import mixin from './utils/echartConfigure'
import App from './App'
Vue.use(Router);
Vue.use(ElementUI);

Vue.mixin (mixin); //将全局函数当做插件来进行注册
Vue.prototype.$echarts=echarts;
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created(){
    this.$axios.get('static/json/tsconfig.json').then(response => {
      this.Template=response.data.Template;
    })
  },
  router,
  components: { App },
  template: '<App/>'
})
