import React, { useState } from "react";
import "../../assets/UserDashboard.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [adType, setAdType] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const watchAdType = watch("adtype", "");

  const submitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append("adtype", data.adtype);
      formData.append("adtitle", data.adtitle);
      formData.append("addescription", data.addescription);

      if (data.adtype === "banner" && data.adimage && data.adimage.length > 0) {
        formData.append("adimage", data.adimage[0]);
      } else if (data.adtype === "video" && data.advideo && data.advideo.length > 0) {
        formData.append("advideo", data.advideo[0]);
      } else if (data.adtype === "carousel" && data.adcarousel && data.adcarousel.length > 0) {
        Array.from(data.adcarousel).forEach((file, index) => {
          formData.append(`adcarousel[${index}]`, file);
        });
      }

      const res = await axios.post("http://127.0.0.1:8000/ads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API Response:", res.data);
      if (res.status === 200) {
        const user = res.data.user;
        localStorage.setItem("id", user._id);
        localStorage.setItem("role", user.role?.name || "USER");

        if (user.role?.name === "Admin") {
          navigate("/admin/AdminDashboard");
        } else if (user.role?.name === "Advertiser") {
          navigate("/advertiser/AdvertiserDashboard");
        } else if (user.role?.name === "User") {
          navigate("/user/UserDashboard");
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Submission failed! Please try again.");
    }
  };

  return (
    <>
      <main className="main">
        <aside className="sidebar">
          <nav className="nav">
            <ul>
              <li className="active">
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

                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="formgroup">
                      <label className="subtitle" htmlFor="adtype">
                        Ad Type
                      </label>
                      <select
                        id="adtype"
                        {...register("adtype", { required: true })}
                        value={adType}
                        onChange={(e) => {
                          setAdType(e.target.value);
                        }}
                        className="form_style"
                      >
                        <option value="">Select ad type</option>
                        <option value="banner">Banner</option>
                        <option value="video">Video</option>
                        <option value="carousel">Carousel</option>
                      </select>
                    </div>

                    <div className="formgroup">
                      <label className="subtitle" htmlFor="adtitle">
                        Ad Title
                      </label>
                      <input
                        type="text"
                        className="form_style"
                        placeholder="Enter Ad Title"
                        required
                        {...register("adtitle")}
                      />
                    </div>

                    <div className="formgroup">
                      <label className="subtitle" htmlFor="addescription">
                        Ad Description
                      </label>
                      <textarea
                        id="addescription"
                        className="form_style"
                        placeholder="Enter Description"
                        required
                        {...register("addescription")}
                      />
                    </div>

                    {watchAdType === "banner" && (
                      <div className="formgroup">
                        <label className="subtitle" htmlFor="adimage">
                          Upload Banner Image
                        </label>
                        <input
                          id="adimage"
                          type="file"
                          accept="image/*"
                          className="form_style"
                          {...register("adimage", { required: true })}
                        />
                      </div>
                    )}

                    {watchAdType === "video" && (
                      <div className="formgroup">
                        <label className="subtitle" htmlFor="advideo">
                          Upload Video
                        </label>
                        <input
                          id="advideo"
                          type="file"
                          accept="video/*"
                          className="form_style"
                          {...register("advideo", { required: true })}
                        />
                      </div>
                    )}

                    {watchAdType === "carousel" && (
                      <div className="formgroup">
                        <label className="subtitle" htmlFor="adcarousel">
                          Upload Carousel Images
                        </label>
                        <input
                          id="adcarousel"
                          type="file"
                          accept="image/*"
                          multiple
                          className="form_style"
                          {...register("adcarousel", { required: true })}
                        />
                      </div>
                    )}

                    <button className="btn1" type="submit">
                      Create Advertisement
                    </button>
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
