import React from "react";
import './About/About.css';
import {
    Link
    
  } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div className="about my-5">
        <div className="container my-5">
         
          <div className="row justify-content-center">
            <div className="aboutMe">
              <div className="myPic">
               
              </div>
             
            </div>

            <div className="col-md-5 aboutMe">
              <b>
                <p className="my-2">
               
                        I am pursuing my under graduation in CSE from IIMT Saharanpur. I am an innovative and enthusiastic person. I am focused and learning new things excites me. My passion in life is to gain knowledge. I don't fear failures or rejections they are ways to enrich you and glorify your personality.
                        I aspire to be an excellent Software Engineer and use my skills to make something productive and helpful for the nation. MY greatest strength is my positive attitude, even during the hardest of times. My only weakness is to
                        never give up no matter how hard things hit me, how much they destroy me I accept them as a challenge, and don't let them break me. <Link to="/About"> Read More....</Link>
                    
                </p>
              </b>
              <div className="social-icons m-3">
                <Link To=" ">
                  <i className="fab fa-github"></i>
                </Link>
                <Link To=" ">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link To=" ">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link To=" ">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link To=" ">
                  <i className="fab fa-instagram"></i>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
