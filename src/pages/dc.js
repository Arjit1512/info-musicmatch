import React from 'react';

const DeleteAccount = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '50px auto', fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <h1>Request Account & Data Deletion</h1>
      <p>If you would like to delete your Musicboard account and all associated data, please follow these steps:</p>
      <ol>
        <li>Send an email to <a href="mailto:truehood.business@gmail.com" style={{fontWeight:700}}>truehood.business@gmail.com</a> with the subject: "Delete My MusicMatch Account".</li>
        <li>Include your <strong>username</strong> and any other account information to verify your identity.</li>
        <li>We will permanently delete your account, profile picture, reviews, and friends list.</li>
        <li>Please note that aggregated or anonymized data may be retained for analytics purposes, but will not be linked to your account.</li>
      </ol>
      <p>Once your request is processed, you will receive a confirmation email.</p>
    </div>
  );
};

export default DeleteAccount;
