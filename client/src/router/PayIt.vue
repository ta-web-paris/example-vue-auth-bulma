<template>
  <div>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    checkout() {
      // this.$checkout.close()
      // is also available.
      this.$checkout.open({
        name: 'Shut up and take my money!',
        currency: 'EUR',
        amount: 100, // 10€
        token: (token) => {
          axios.post('http://localhost:3000/api/pay', { token })
          .then(r => r.data)
          .then(console.log)
          .catch(console.error)
        }
      });
    }
  }
}
</script>
