import Vue from 'vue';
import App from './App';
import router from './router';
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    user: null,
  },

  created() {
    checkUser(this.$root);
  },
});
