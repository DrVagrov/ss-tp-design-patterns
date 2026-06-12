class PayPal {
  pay(amount) {
    return `Paiement PayPal : ${amount} €`;
  }
}

class Stripe {
  makePayment(amount) {
    return `Paiement Stripe : ${amount} €`;
  }
}

class PayPalAdapter {
  constructor(paypal) {
    this.paypal = paypal;
  }

  payer(amount) {
    return this.paypal.pay(amount);
  }
}

class StripeAdapter {
  constructor(stripe) {
    this.stripe = stripe;
  }

  payer(amount) {
    return this.stripe.makePayment(amount);
  }
}

function processPayment(paymentMethod, amount) {
  console.log(paymentMethod.payer(amount));
}

module.exports = {
  PayPal,
  Stripe,
  PayPalAdapter,
  StripeAdapter,
  processPayment,
};

if (require.main === module) {
  const paypal = new PayPalAdapter(new PayPal());
  const stripe = new StripeAdapter(new Stripe());

  processPayment(paypal, 100);
  processPayment(stripe, 100);
}
