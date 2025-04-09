import React from "react";
import "../../assets/UserDashboard.css";


const UserDashboard = () => {


  
  return (
    <><main class="main">
    <aside class="sidebar">
      <nav class="nav">
        <ul>
          <li class="active"><a href="#">Welcome</a></li>
          <li><a href="#">Who We Are</a></li>
          <li><a href="#">What We Do</a></li>
          <li><a href="#">Get In Touch</a></li>
        </ul>
      </nav>
    </aside>
  
    <section class="twitter">
      <div class="container">
        <h1>This is User Dashboard</h1>
        <a target="_blank" href="https://twitter.com/ReisnerShawn">
          <img class="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"></img>
        </a>
        <p>Follow me</p>
        <p>on Twitter!</p>
      </div>
    </section>
  </main>
      {/* <div>
        <h1>This is User Dashboard</h1>
      </div> */}
    </>
  );
};

export default UserDashboard;
