import Vue from 'vue';
import vuetify from '../../plugins/vuetify';
import router from '../../router';
import ThanksPage from '../../ThanksPage';


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(ThanksPage)
}).$mount('#app')
