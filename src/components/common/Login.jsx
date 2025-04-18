import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../../assets/Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import A1 from "../../assets/media/A1.jpg";
import A2 from "../../assets/media/A2.jpg";
import A3 from "../../assets/media/A3.jpg";
import A4 from "../../assets/media/A4.jpg";
import A5 from "../../assets/media/A5.jpg";
import A6 from "../../assets/media/A6.jpg";
import A7 from "../../assets/media/A7.jpg";
import A8 from "../../assets/media/A8.jpg";
import A9 from "../../assets/media/A9.jpg";
import A10 from "../../assets/media/A10.jpg";
import A11 from "../../assets/media/A11.jpg";
import A12 from "../../assets/media/A12.jpg";
import A13 from "../../assets/media/A13.jpg";
import A14 from "../../assets/media/A14.jpg";
import A15 from "../../assets/media/A2.jpg";
import A16 from "../../assets/media/A2.jpg";
import A17 from "../../assets/media/A5.jpg";
import A18 from "../../assets/media/A4.jpg";
import A19 from "../../assets/media/A1.jpg";
import A20 from "../../assets/media/A3.jpg";
import A21 from "../../assets/media/A7.jpg";
import A22 from "../../assets/media/A8.jpg";
import A23 from "../../assets/media/A9.jpg";
import A24 from "../../assets/media/A10.jpg";
import A25 from "../../assets/media/A11.jpg";
import A26 from "../../assets/media/A14.jpg";
import A27 from "../../assets/media/A13.jpg";
import A28 from "../../assets/media/A14.jpg";


const Login = ({ items = [], gradientColor = "#010719" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const [email, setEmail] = useState('');
  const mouseXRef = useRef(window.innerWidth / 2);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  
  //Background Images
  const imageItems = [
    A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,A16,A17,A18,
    A19,A20,A21,A22,A23,A24,A25,A26,A27,A28,
  ];

  const submitHandler = async (data) => {
    try {
      console.log("formData...", data);

      const res = await axios.post("http://127.0.0.1:8000/user/login", data);
      console.log("API Response:", res.data);

      if(res.status === 200){
        const user = res.data.user;
        console.log("User Data:", user);

        localStorage.setItem("id", user._id);
        localStorage.setItem("role", user.role?.name || "USER" );

        if (user.role?.name === "Admin") {
          console.log("Navigating to Admin Dashboard");
          navigate("/admin/AdminDashboard");
        } else if (user.role?.name === "Advertiser") {
          console.log("Navigating to Advertiser Dashboard");
          navigate("/advertiser/AdvertiserDashboard");
        } else if(user.role?.name === "User") {
          console.log("Navigating to Default Dashboard");
          navigate("/user/UserDashboard");
        }
      }
    }catch (error) {
      console.error("Login Error:", error);
      alert("Login failed! Please check your credentials.");
    }
  }

  const handleForgotPassword = async () => {
    const email = prompt("Please enter your email to reset password:");
    if (!email) return;
  
    try {
      const res = await axios.post(`http://127.0.0.1:8000/forgotPassword?email=${email}`);
      // console.log("Response:",res.data);
      alert("Reset Link has been sent to Email Id")
    } catch (error) {
      console.error("Forgot Password Error:", error);
      alert("Failed to send reset link. Please try again.");
    }
  };

  const totalItems = 28;
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : imageItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 500;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <>
   
    <div className="noscroll loading" ref={gridRef}>
        
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      > 
      
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const imageUrl = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="logincontainer">
            <div className="loginformwrapper">
              <h2 className="title">Welcome Back</h2>
              
              <form action="" onSubmit={handleSubmit(submitHandler)}>
                <div className="formgroup">
                  <label className="subtitle" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="formstyle" 
                    {...register("email")}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="formgroup">
                  <label className="subtitle" htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="formstyle"
                    {...register("password")}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="formoptions">
                  <span className="span1">
                   <a className="passlink" href="/"  onClick={handleForgotPassword}>Forgot password?</a>
                </span>
                </div>
                <button className="btn1">SIGN IN</button>
              <p className="ptext1">
              Don't have an account?{" "}
              <a className="link1" href="/Signup">
                Sign Up
              </a>
            </p>
                
              </form>
            </div>
          </div>

        <div className="fullview"></div>
        
      </section>
    </div>
    
    
    </>
  );
};

export default Login;
