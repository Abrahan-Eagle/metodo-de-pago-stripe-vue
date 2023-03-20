import { StripeCheckout } from '@vue-stripe/vue-stripe';


const { createApp } = Vue


  const app = createApp({

    ccomponents: {
      StripeCheckout,
    },
    data() {
      return {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        loading: false,
        lineItems: [
          {
            price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL: 'your-success-url',
        cancelURL: 'your-cancel-url',
      };
    },
    methods: {
      submit() {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  });
