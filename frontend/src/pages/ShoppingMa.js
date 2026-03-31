import { useParams } from "react-router-dom";
import "../styles/Shopping.css";

import mallImg from "../assets/images/stephens.jpg";
import mall from "../assets/images/jervis.jpg";
import mall2 from "../assets/images/liffey.jpg";
import mall3 from "../assets/images/west.jpg";
import mall4 from "../assets/images/ManorMills.jpg";
import BackButton from "../components/BackButton";

function ShoppingMalls() {

  const { city } = useParams();

  const mallsData = {

    Dublin: [
      {
        name: "Stephen's Green Shopping Centre",
        description: "Popular shopping centre in Dublin city centre.",
        image: mallImg,
        mapLink: "https://maps.app.goo.gl/yXkW3NAHXyes4MHPA"
      },
      {
        name: "Jervis Shopping Centre",
        description: "Modern shopping complex with many fashion brands.",
        image: mall,
        mapLink: "https://maps.app.goo.gl/sMX1vQoPR8i3yDKW7"
      },
      {
        name: "Liffey Valley Shopping Centre",
        description: "Large shopping mall with restaurants and cinema.",
        image: mall2,
        mapLink: "https://maps.app.goo.gl/gFLFiZdsxd9TyjGc7"
      },
      {
        name: "Westend Shopping Park",
        description: "Retail park with popular stores and supermarkets.",
        image: mall3,
        mapLink: "https://maps.app.goo.gl/E31s9Z1EZjV3sgqv5"
      }
    ],

    Maynooth: [
      {
        name: "Manor Mills",
        description: "Local shopping centre with supermarkets and retail shops.",
        image: mall4,
        mapLink: "https://maps.app.goo.gl/dsY2u3R2Fh8X4bF36"
      },
      {
        name: "Carton Retail Park",
        description: "Retail park near Maynooth with various shopping stores.",
        image: mall2,
        mapLink: "https://maps.app.goo.gl/5E7Tqf5r7o4QvTqM9"
      },
      {
        name: "Carton Retail Park",
        description: "Retail park near Maynooth with various shopping stores.",
        image: mall2,
        mapLink: "https://maps.app.goo.gl/5E7Tqf5r7o4QvTqM9"
      }
    ],

    Cork: [
      {
        name: "Mahon Point Shopping Centre",
        description: "One of Cork's largest shopping malls with many brands.",
        image: mall,
        mapLink: "https://maps.app.goo.gl/8Zz7yYV2mUkTz2Bt8"
      },
      {
        name: "Wilton Shopping Centre",
        description: "Popular Cork shopping centre with restaurants and shops.",
        image: mall2,
        mapLink: "https://maps.app.goo.gl/F3XjQJ7nJXn9o5m46"
      },
      {
        name: "Blackpool Shopping Centre",
        description: "Large shopping destination with multiple stores.",
        image: mall3,
        mapLink: "https://maps.app.goo.gl/d9ShB6uPpQm6n6RA8"
      }
    ]

  };

  const malls = mallsData[city] || [];

  return (
    <>
      <BackButton />

      <div className="shopping-container">
        <h1>{city} Shopping Malls</h1>

        <div className="shopping-grid">

          {malls.map((mall, index) => (

            <div key={index} className="shopping-card">

              <img src={mall.image} alt={mall.name} />

              <h3>{mall.name}</h3>

              <p>{mall.description}</p>

              <button
                onClick={() => window.open(mall.mapLink, "_blank")}
              >
                EXPLORE »
              </button>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default ShoppingMalls;
