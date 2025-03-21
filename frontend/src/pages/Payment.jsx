// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Eye Icon
// import "../styles/payment.css";
// import phonePeLogo from "../assets/images/phonepe.jpg";
// import googlePayLogo from "../assets/images/googlepay.png";

// const Payment = () => {
//    const [paymentMethod, setPaymentMethod] = useState(null);
//    const [cardDetails, setCardDetails] = useState({ number: "", pin: "" });
//    const [showPin, setShowPin] = useState(false);
//    const navigate = useNavigate();

//    const handlePayment = () => {
//       navigate("/success");
//    };

//    return (
//       <section>
//          <Container>
//             <Row>
//                <Col lg="8" className="m-auto">
//                   <div className="payment__container">
//                      <h2>Confirm Your Payment</h2>

//                      {/* Payment Method Selection */}
//                      <div className="payment-options">
//                         <Button onClick={() => setPaymentMethod("upi")}>Pay with UPI</Button>
//                         <Button onClick={() => setPaymentMethod("card")}>Pay with Credit/Debit Card</Button>
//                      </div>

//                      {/* UPI Payment Options */}
//                      {paymentMethod === "upi" && (
//                         <div className="upi-options">
//                            <h4>Select UPI App</h4>
//                            <div className="upi-apps">
//                            <img src={phonePeLogo} alt="PhonePe" onClick={handlePayment} />
//                            <img src={googlePayLogo} alt="Google Pay" onClick={handlePayment} />
//                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" onClick={handlePayment} />
//                            </div>
//                         </div>
//                      )}

//                      {/* Credit/Debit Card Form */}
//                      {paymentMethod === "card" && (
//                         <div className="card-payment">
//                            <h4>Enter Card Details</h4>
//                            <input
//                               type="text"
//                               placeholder="Card Number (12 digits)"
//                               value={cardDetails.number}
//                               maxLength="12"
//                               onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
//                            />
//                            <div className="pin-container">
//                               <input
//                                  type={showPin ? "text" : "password"}
//                                  placeholder="PIN"
//                                  value={cardDetails.pin}
//                                  onChange={(e) => setCardDetails({ ...cardDetails, pin: e.target.value })}
//                               />
//                               <span className="eye-icon" onClick={() => setShowPin(!showPin)}>
//                                  {showPin ? <FaEyeSlash /> : <FaEye />}
//                               </span>
//                            </div>
//                            <Button onClick={handlePayment}>Submit</Button>
//                         </div>
//                      )}
//                   </div>
//                </Col>
//             </Row>
//          </Container>
//       </section>
//    );
// };

// export default Payment;
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const bookingDetails = {
    name: "John Doe",
    destination: "Maldives",
    date: "2025-03-25",
    amount: "₹5000",
    email: "johndoe@example.com", // Customer's Email
  };

  const sendEmail = async (paymentId) => {
    const formData = new FormData();
    formData.append("access_key", "11e837f4-cc9a-4ada-8fd1-0a8d1a62b8b9"); // Replace with your Web3Forms API Key
    formData.append("subject", "Booking Confirmation - Travel Journal");
    formData.append("from_name", "Travel Journal");
    formData.append("to", bookingDetails.email);
    formData.append(
      "message",
      `🎉 Payment Successful! \n\n📍 Destination: ${bookingDetails.destination} \n📅 Date: ${bookingDetails.date} \n💰 Amount: ${bookingDetails.amount} \n🔗 Payment ID: ${paymentId} \n\nThank you for booking with us!`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Email Sent Successfully!");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => initiatePayment();
    document.body.appendChild(script);
  };

  const initiatePayment = () => {
    const options = {
      key: "rzp_test_aVFsXiQpfzHd7p", // Replace with your Razorpay test key
      amount: 50000, // Amount in paise (₹500)
      currency: "INR",
      name: "Travel Journal",
      description: "Booking Payment",
      image: "'../../assets/images/logo1.png'",
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );
        sendEmail(response.razorpay_payment_id); // Send email after payment
        navigate("/success");
      },
      prefill: {
        name: bookingDetails.name,
        email: bookingDetails.email,
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="payment__container">
              <h2>Confirm Your Payment</h2>
              <Button onClick={loadRazorpay} className="razorpay-btn">
                Pay Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Payment;
