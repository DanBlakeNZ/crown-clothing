import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe requires the price in cents
  const publishableKey =
    "pk_test_51HNruZHXq9OV0Q7THytPo4dO7TtUpY7WumswzbA4rM0okgA1g9I1V7ZHe8XIosaZGJNHybUtZUaiScPI8lHVUvxE000Gcnbcxr";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    //The token to be passed to the backend here, which then creates the charge.
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
