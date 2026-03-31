import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/api";
import "../styles/cities.css";
import BackButton from "../components/BackButton";

//  Import library
import { formatCityName, getCityImage } from "../utils/cityLibrary";

function Cities() {

  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const res = await API.get("/cities");
      console.log(res.data);
      setCities(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackButton />

      <div className="cities-page">

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Return Back
        </button>

        <h2>
          Discover your preferred city by selecting from the choices below.
        </h2>

        <div className="city-grid">

          {cities.map((city) => (

            <motion.div
              key={city.id}
              whileHover={{ scale: 1.05 }}
              className="city-card"
              onClick={() => navigate(`/dashboard/${city.name}`)}
            >

              <img
                src={getCityImage(city.image)}  
                alt={city.name}
              />

              <div className="overlay">
                {formatCityName(city.name)}   {/* library used */}
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Cities;