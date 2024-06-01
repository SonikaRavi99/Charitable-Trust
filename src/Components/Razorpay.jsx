import React, { useEffect } from "react";
import "./Donation.css";
import Logo from "../assert/Logo.jpeg";

const Razorpay = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_Q4kvPXbw9bvyij",
      currency: "INR",
      amount: "500",
      name: "Jeeva Trust",
      description: "Test Transaction",
      image: { Logo },
      // order_id: "order_ODIOY5f2gfCpi5",

      handler: function (response) {
        alert("Payment successful");
        console.log("Payment ID:", response.razorpay_payment_id);
        alert("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },
      prefill: {
        name: "Jeeva Vruksha",
        email: "jeevavruksha2019@gmail.com",
        contact: "7829096933",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="razorpay">
      <a className="paylinkbutton" id="rzp-button1" onClick={handlePayment}>
        Pay
      </a>
    </div>
  );
};

export default Razorpay;
