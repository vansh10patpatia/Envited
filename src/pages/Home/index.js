import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPage from "../../assets/images/Landing-Page.svg";

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="home-page-container">
            <div className="image-container">
                <div>
                    <img src={LandingPage} />
                    <div className="button-container button-screen">
                        <button className="create-event-btn" onClick={()=>{navigate("/create")}}>
                            🎉 Create my event
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="text-container">
                <div className='text-align-center'>
                    <h2>
                        Imagine if <br /><span className="snapchat">Snapchat</span><br /> had events.
                    </h2>
                    <p>
                        Easily host and share events with your friends across any social media.
                    </p>
                    <div className="button-container button-desktop">
                        <button className="create-event-btn" onClick={()=>{navigate("/create")}}>
                            🎉 Create my event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;


