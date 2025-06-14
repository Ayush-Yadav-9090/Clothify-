
import "../../CSS/policypage.css"
import React from 'react';


 export const Policypage = () => {
  return (
    <div className="policy-page">
      <h1 className="title">Policies</h1>

      <section className="policy-section" id="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy and are committed to protecting your personal information. Our privacy policy outlines the data we collect, how we use it, and the measures we take to safeguard your information.
        </p>
        <ul>
          <li>We collect personal information such as name, email, and address.</li>
          <li>Your information will not be shared with third parties without consent.</li>
          <li>We use secure encryption to protect sensitive data.</li>
        </ul>
      </section>

      <section className="policy-section" id="delivery-exchange-policy">
        <h2>Delivery & Exchange Policy</h2>
        <p>
          We offer reliable delivery services and have a straightforward exchange policy to ensure customer satisfaction.
        </p>
        <ul>
          <li>Delivery typically takes 5-7 business days.</li>
          <li>If you’re not satisfied with your purchase, we offer exchanges within 30 days.</li>
          <li>Exchanges can be processed by contacting our support team with the order details.</li>
        </ul>
      </section>

      <section className="policy-section" id="support-policy">
        <h2>24/7 Support Policy</h2>
        <p>
          Our customer support team is available 24/7 to assist with any inquiries or issues you may have.
        </p>
        <ul>
          <li>Support is available through live chat, email, or phone.</li>
          <li>We aim to resolve all issues within 24 hours.</li>
          <li>If your issue requires a more detailed solution, our team will follow up promptly.</li>
        </ul>
      </section>
    </div>
  );
};

export default Policypage;
