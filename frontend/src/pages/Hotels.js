import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import "../styles/Hotels.css";
import BackButton from "../components/BackButton";

function Hotels() {
  const { city } = useParams();
  const [hotels, setHotels] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_URL;

  // ✅ FETCH HOTELS
  const fetchHotels = async () => {
    try {
      const res = await API.get("/hotels");
      setHotels(res.data || []);
    } catch (error) {
      console.log("Fetch error:", error);
      alert("Failed to load hotels");
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <>
      <BackButton />

      <div className="hotel-page">

        <div className="hotel-hero">
          <h1>{city} Hotels</h1>
          <p>Find the best luxury and budget hotels in {city}</p>
        </div>

        <div className="hotel-grid">
          {hotels.length === 0 ? (
            <p>No hotels found</p>
          ) : (
            hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">

                <div className="hotel-image">
                  {/* ✅ FIXED IMAGE URL */}
                  <img
                    src={
                      hotel.image
                        ? `${BASE_URL}/uploads/${hotel.image}`
                        : "https://via.placeholder.com/300"
                    }
                    alt={hotel.name}
                  />
                </div>

                <div className="hotel-content">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.description}</p>

                  <a
                    href={hotel.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="book-btn">View Map</button>
                  </a>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
}

export default Hotels;