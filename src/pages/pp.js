import React from 'react';
import '../styles/pp.css';

const PP = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Last Updated: October 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Musicboard 🎵</strong>. Your privacy is important to us. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our app.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>User Information:</strong> Username, password (encrypted), and display picture (stored securely in AWS S3).</li>
          <li><strong>Reviews & Ratings:</strong> Music reviews, ratings, and comments you post.</li>
          <li><strong>Friends & Connections:</strong> List of friends you add or interact with.</li>
          <li><strong>Technical Data:</strong> Device type, operating system, and app usage analytics.</li>
          <li><strong>Spotify API Data:</strong> Music metadata such as album/track names, images, and artists fetched from Spotify.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To personalize your experience and show your reviews, ratings, and dashboard data.</li>
          <li>To improve app performance and provide relevant music recommendations.</li>
          <li>To securely store and display your profile picture and reviews.</li>
          <li>To maintain authentication and account access through our backend.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage & Security</h2>
        <p>
          Your data is securely stored in <strong>MongoDB</strong> and cached using <strong>Redis</strong> for faster performance. 
          Profile pictures are stored in <strong>AWS S3</strong>. All sensitive information, such as passwords, 
          is encrypted using industry-standard hashing algorithms.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell or share your personal data with third parties. 
          However, we may share limited, non-personal information (such as usage statistics) for app improvement purposes.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access and update your account information.</li>
          <li>Request deletion of your account and associated data.</li>
          <li>Withdraw consent for data collection at any time by deleting your account.</li>
        </ul>
      </section>

      <section>
        <h2>7. Third-Party Services</h2>
        <p>
          Musicboard integrates with the <strong>Spotify API</strong> to display music information. 
          Please refer to <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Spotify’s Privacy Policy</a> to learn how they handle data.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be reflected here with an updated “Last Updated” date.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <p className="contact-info">
          📧 <strong>truehood.business@gmail.com</strong>
        </p>
      </section>

      <footer className="privacy-footer">
        <p>© 2025 Musicboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PP;
