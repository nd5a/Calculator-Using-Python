import React, { useState } from 'react';
import '../styles/Support.css'; // Ensure you create this CSS file
import { BASE_URL } from "../utils/config";

const Support = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
       const res = await fetch(`${BASE_URL}/support/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
       });
 
       const result = await res.json();
 
       if (!res.ok) {
          return alert(result.message);
       }
 
       setSubmitted(true);
       setFormData({ name: '', email: '', message: '' });
    } catch (error) {
       alert('Error submitting form. Please try again later.');
    }
 };
 

  return (
    <div className="support-container">
      <h2>Support & FAQs</h2>

      {/* FAQ Section */}
      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>How can I book a tour?</summary>
          <p>You can book a tour by visiting our "Bookings" section and choosing a package.</p>
        </details>
        <details>
          <summary>Can I cancel my booking?</summary>
          <p>Yes, cancellations can be made within 48 hours of booking.</p>
        </details>
        <details>
          <summary>How do I contact customer support?</summary>
          <p>You can fill out the support form below or email us at support@example.com.</p>
        </details>
      </div>

      {/* Support Form */}
      <div className="support-form">
        <h3>Contact Support</h3>
        {submitted ? <p className="success">Your message has been sent!</p> : 
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
        }
      </div>
    </div>
  );
};

export default Support;
