import React from 'react';
import "../../assets/AdvertiserDashboard.css";

const AdvertiserDashboard = () => {
  return (
    <main className="main">
      <section className="message-section" style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Advertisement creation is now handled in the User Dashboard.</h2>
        <p>Please go to the User Dashboard to create new advertisements.</p>
      </section>
    </main>
  );
};

export default AdvertiserDashboard;
