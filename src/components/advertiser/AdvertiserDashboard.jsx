import React, {useState} from 'react'
import "../../assets/AdvertiserDashboard.css"

const AdvertiserDashboard = () => {
  const [adType, setAdType] = useState("")
  return (
    <>
    <main class="main">
        <aside class="sidebar">
          <nav class="nav">
            <ul>
              <li class="active">
                <a href="#">Create Ads</a>
              </li>
              <li class="active">
                <a href="#">Target Audience</a>
              </li>
              <li class="active">
                <a href="#">Ad Distribution Channel</a>
              </li>
              <li class="active">
                <a href="#">Set Budget </a>
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
              
              <form action="" >
                <div className="formgroup">
                  <label className="subtitle" for="adtype">Ad Type</label>
                  <select id="adtype" name="adtype" onChange={(e) => setAdType(e.target.value)} className="form_style">
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
                  />
                </div>
                
                <div className="formgroup">
                  <label className="subtitle" for="addescription">Ad Description</label>
                  <textarea 
                    id="addescription"
                    className="form_style"
                    placeholder="Enter Description"
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
  )
}

export default AdvertiserDashboard
