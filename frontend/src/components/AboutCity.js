import { useParams } from "react-router-dom";
import "../styles/AboutCity.css";
import cityImg from "../assets/images/dublin.jpg"; 

function AboutCity() {

  const { city } = useParams();

  return (
    <div className="about-page">
      <div className="about-hero" style={{ backgroundImage: `url(${cityImg})` }}>
        <div className="overlay">
          <h1>{city}</h1>
          <p>Discover the beauty, culture & spirit of {city}</p>
        </div>
      </div>
      <div className="about-content">

        <div className="about-card">
          <h2>🌆 City Overview</h2>
          <p>
            {city} is one of the most vibrant and historic cities. 
            It blends modern lifestyle with deep cultural roots 
            and breathtaking architecture.
          </p>
        </div>

        <div className="about-card">
          <h2>🎭 Culture</h2>
          <p>
            The city celebrates music, art, literature and local traditions.
            Festivals and cultural events attract thousands of visitors every year.
          </p>
        </div>

        <div className="about-card">
          <h2>🎉 Festivals</h2>
          <p>
            Famous annual festivals showcase colorful parades, 
            traditional performances and joyful celebrations.
          </p>
        </div>
        <div className="gallery">
          <img src={cityImg} alt="city" />
          <img src={cityImg} alt="city" />
          <img src={cityImg} alt="city" />
        </div>

      </div>

    </div>
  );
}
export default AboutCity;