import Vue from 'vue';
import vuetify from '../../plugins/vuetify';
import router from '../../router';
import Thanks from '../../Thanks';


Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(Thanks)
}).$mount('#app')
