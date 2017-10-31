import Vue from 'vue';
import App from './App';
import router from './router';
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import VueStripeCheckout from 'vue-stripe-checkout';

// base/global options
// these options can be overridden
// by the options in the .open(options)
// function.
const options = {
  key: 'pk_test_PUTHEREYOUROWNKEY',
  locale: 'auto',
  currency: 'EUR',
  billingAddress: false,
  panelLabel: 'Subscribe {{amount}}',
};

Vue.use(VueStripeCheckout, options);

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
