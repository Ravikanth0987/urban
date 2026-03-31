import React from "react";
import aboutImage from "../assets/images/hotelbook.png"; // use your image
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      
      <div className="about-image">
        <img src={aboutImage} alt="About Urban Compass" />
      </div>

      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Cities and urban areas witness a massive wave of people coming from
          every corner in search of jobs, education, and even a better lifestyle.
          In the initial days after the move, people don’t know the main facilities,
          attractions, and services offered in the city.
        </p>

        <p>
          The smart city project seeks to address that by creating an integrated
          platform to store essential and related information to guide newcomers
          in a city. The application provides visitors and students information
          like hotels, transportation services, healthcare facilities, shopping
          landmarks, emergency helplines, and more.
        </p>

        <p>
          It works like a smart city guide. Users can browse through the platform
          to get all the necessary details and make their movement across the city
          comfortable and easy.
        </p>
      </div>

    </div>
  );
}

export default About;