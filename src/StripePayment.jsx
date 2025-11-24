import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe("pk_test_51SSvlUJATbZOSiZwOlg4IErhZAQdCwdvxohZcmV2M2SORROnlPTq8LuSqyeZp6T4EUstlULVkwFDJBAT5sdky55F00IBdegW5Z");

export default function StripePayment({ customerData }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        console.log("Sending customerData:", customerData);
        const res = await fetch("http://localhost:4242/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customerData),
        });
        const data = await res.json();
        console.log("Received clientSecret:", data.clientSecret);
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error("Error fetching PaymentIntent:", err);
      }
    };
    fetchPaymentIntent();
  }, [customerData]);

  if (!clientSecret) return <p>Loading payment details…</p>;

  return (
    <Elements options={{ clientSecret, appearance: { theme: "stripe" } }} stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
