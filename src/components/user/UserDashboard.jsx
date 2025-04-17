import React, {useState} from "react";
import "../../assets/UserDashboard.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [adType, setAdType] = useState("")
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      console.log("formData...", data);

      const res = await axios.post("http://127.0.0.1:8000/ads", data);
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
  return (
    <>
      <main class="main">
        <aside class="sidebar">
          <nav class="nav">
            <ul>
              <li class="active">
                <a href="#">Create Ads</a>
              </li>
              
            </ul>
          </nav>
        </aside>

        <section className="twitter">
          <div className="leftcontainer">
          <div className="backgroundwrapper">
          <div className="logincontainer">
            <div className="loginformwrapper">
              <h2 className="title">Create New Advertisement</h2>
              
              <form action="" onSubmit={handleSubmit(submitHandler)}>
                <div className="formgroup">
                  <label className="subtitle" for="adtype">Ad Type</label>
                  <select id="adtype" name="adtype" onChange={(e) => setAdType(e.target.value)} className="form_style" {...register("adtype")}>
                  <option value="">Select ad type</option>
            <option value="banner">Banner</option>
            <option value="video">Video</option>
            <option value="carousel">Carousel</option>

                  </select>
                </div>
                
                <div className="formgroup">
                  <label className="subtitle" for="adtitle">Ad Title</label>
                  <input 
                    type="text" 
                    className="form_style"
                    placeholder="Enter Ad Title"
                    required
                    {...register("adtitle")}
                  />
                </div>
                
                <div className="formgroup">
                  <label className="subtitle" for="addescription">Ad Description</label>
                  <textarea 
                    id="addescription"
                    className="form_style"
                    placeholder="Enter Description"
                    {...register("addescription")}
                    required
                  />
                </div>
                {adType === "banner" && (
                  <div className="formgroup">
                    <label className="subtitle" for="adimage">Upload Banner Image</label>
                    <input id="adimage" type="file" accept="image/*" className="form_style"></input>
                  </div>
                )}
                {adType === "video" && (
                  <div className="formgroup">
                    <label className="subtitle" for="advideo">Upload Video</label>
                    <input id="advideo" type="file" accept="video/*" className="form_style"></input>
                  </div>
                )}
                {adType === "carousel" && (
                  <div className="formgroup">
                    <label className="subtitle" for="adcarousel">Upload Carousel Images</label>
                    <input id="adcarousel" type="file" accept="image/*" multiple className="form_style"></input>
                  </div>
                )}
                <button className="btn1">Create Advertisement</button>
              
                
              </form>
            </div>
          </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserDashboard;
