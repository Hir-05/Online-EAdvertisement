import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../assets/SignUp.css";
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


const SignUp = ({ items = [], gradientColor = "#010719" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //Background Images
  const imageItems = [
    A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,A16,A17,A18,
    A19,A20,A21,A22,A23,A24,A25,A26,A27,A28,
  ];

  const submitHandler = async (data) => {
    if (data.role === "admin"){
      data.role_id = "67e97de284c80f0425a614ec";
    }
    else if (data.role === "advertiser"){
      data.role_id = "67e97dd284c80f0425a614eb";
    }
    else if (data.role === "user"){
      data.role_id = "67ea2d6f795ec218103da05b";
    }
    data.status = data.status == "true" ? true : false;
    console.log("formData...", data);

    //API Call
    try{
      const res = await axios.post("/user",data);

      console.log(res); //axios
      console.log(res.data); //API Response
      if (res.status === 201) {
        alert("Signup success");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
        console.error("Signup error:", error);
        alert("Signup failed: " + error.response?.data?.message || error.message);
      }
    
  }

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
        
        <div className="mainbox">
      <div className="form_area">
        <p className="title">SIGN UP</p>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <div className="form_group">
            <label className="sub_title" for="name">
              Full Name
            </label>
            <input
              placeholder="Enter your name here"
              className="form_style"
              type="text" 
              {...register("fullName")}
            ></input>
          </div>
          <div className="form_group">
            <label className="sub_title" for="age">
              Age
            </label>
            <input
              placeholder="Enter your age"
              className="form_style"
              type="number"
              {...register("age")}
            ></input>
          </div>
          <div className="form_group">
            <label className="sub_title" for="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              className="form_style"
              type="email"
              {...register("email")}
            ></input>
          </div>
          <div className="form_group">
            <label className="sub_title" for="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              className="form_style"
              type="password"
              {...register("password")}
            ></input>
          </div>
          <div className="form_group" >
            <label className="sub_title" for="role">
              Select Your Role:
            </label>
            <select name="roles" id="role" className="form_style" {...register("role")}>
              <option selected disabled>Select Your Role</option>
               <option value="admin">Admin</option>
               <option value="advertiser">Advertiser</option>
               <option value="user">User</option>
            </select>
          </div>
          <div>
            <button className="btn">SIGN UP</button>
            <p className="ptext">
              Have an Account?{" "}
              <a className="link" href="/login">
                Login Here!
              </a>
            </p>
            
          </div>
          
        </form>
      </div>
    </div>
        
      </section>
    </div>
    
    
    </>
  );
};

export default SignUp;
