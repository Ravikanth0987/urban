import { useParams } from "react-router-dom";
import "../styles/Restaurants.css";
import foodImg from "../assets/images/dublin.jpg";
import BackButton from "../components/BackButton";
import res from "../assets/images/res.jpg";

function Restaurants() {
  const { city } = useParams();

  const restaurants = [
    {
      name: "Urban Grill",
      cuisine: "Multi-Cuisine",
      rating: "4.8",
      description:
        "A premium dining experience with global flavors and elegant ambience.",
      image: res,
      mapLink: "https://maps.app.goo.gl/NYqH5cwuskVzZxSh9"
    },
    {
      name: "Spice Garden",
      cuisine: "Indian",
      rating: "4.6",
      description:
        "Authentic traditional dishes with rich spices and fresh ingredients.",
      image: res,
      mapLink: "https://maps.app.goo.gl/NYqH5cwuskVzZxSh9"
    },
    {
      name: "Ocean Delight",
      cuisine: "Seafood",
      rating: "4.7",
      description:
        "Fresh seafood specialties served with breathtaking interior design.",
      image: res,
      mapLink: "https://maps.app.goo.gl/NYqH5cwuskVzZxSh9"
    },
    {
      name: "Skyline Cafe",
      cuisine: "Cafe & Bakery",
      rating: "4.5",
      description:
        "Relax with handcrafted coffee and delicious desserts.",
      image: res,
      mapLink: "https://maps.app.goo.gl/NYqH5cwuskVzZxSh9"
    },
  ];

  return (
    <>
      <BackButton />

      <div className="restaurant-page">

        <div className="restaurant-hero">
          <h1>{city} Restaurants</h1>
          <p>Discover the finest dining experiences in {city}</p>
        </div>

        <div className="restaurant-grid">
          {restaurants.map((item, index) => (
            <div key={index} className="restaurant-card">

              <div className="restaurant-image">
                <img src={item.image} alt={item.name} />
                <div className="rating">⭐ {item.rating}</div>
              </div>

              <div className="restaurant-content">
                <h3>{item.name}</h3>
                <span className="cuisine">{item.cuisine}</span>
                <p>{item.description}</p>

                <div className="restaurant-buttons">
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="map-btn">View Map</button>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Restaurants;