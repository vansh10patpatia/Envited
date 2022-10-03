import React from 'react';
import LandingPage from "../../assets/images/Landing-Page.svg";

const Home = () => {
  return (
    <>
        <div className="home-page-container">
            <div className="image-container">
                <img src={LandingPage} />
            </div>
            <div className="text-container">
                <div>
                    <h2>
                        Imagine if <span className="snapchat">Snapchat</span><br /> had events.
                    </h2>
                    <p>
                        Easily host and share events with your friends across any social media.
                    </p>
                    <div className="button-container">
                        <button className="create-event-btn">
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