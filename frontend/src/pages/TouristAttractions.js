import { useParams } from "react-router-dom";
import "../styles/Tourist.css";

import placeImg from "../assets/images/dublin.jpg";
import BackButton from "../components/BackButton";
import Img1 from "../assets/images/Guiness.jpg";
import Img2 from "../assets/images/Trinity.jpg";
import Img3 from "../assets/images/castle.jpg";
import Img4 from "../assets/images/caption.jpg";
import Img5 from "../assets/images/patrik.jpg";
import Img6 from "../assets/images/Temple.jpg";
import Img7 from "../assets/images/Maynoo.jpg";
import Img8 from "../assets/images/Carton.jpg";
import Img9 from "../assets/images/st.jpg";
import Img10 from "../assets/images/do.jpg";
function TouristAttractions() {

  const { city } = useParams();

  const attractionsData = {

    Dublin: [
      {
        title: "Guinness Storehouse",
        description: "Ireland's most famous brewery experience with panoramic views of Dublin.",
        image: Img1,
        mapLink: "https://maps.app.goo.gl/awLMT1pWPLRWeQ2m8"
      },
      {
        title: "Trinity College & Book of Kells",
        description: "Historic university home to the famous Book of Kells.",
        image: Img2,
        mapLink: "https://maps.app.goo.gl/hRGw3HyoyYENNsXA7"
      },
      {
        title: "Dublin Castle",
        description: "Historic castle that played an important role in Irish history.",
        image: Img3,
        mapLink: "https://maps.app.goo.gl/KANv5moFRbQzGFrR9"
      },
      {
        title: "Phoenix Park",
        description: "One of Europe's largest city parks and home to Dublin Zoo.",
        image: Img4,
        mapLink: "https://maps.app.goo.gl/NjCcXwdU1sbhGbgx7"
      },
      {
        title: "St. Patrick's Cathedral",
        description: "Ireland's largest cathedral and an iconic landmark.",
        image: Img5,
        mapLink: "https://maps.app.goo.gl/h9zfGHhaGZEidqwL9"
      },
      {
        title: "Temple Bar District",
        description: "Cultural quarter famous for pubs, music, and nightlife.",
        image: Img6,
        mapLink: "https://maps.app.goo.gl/Q54SSJw3df7KjpU88"
      }
    ],

    Maynooth: [
      {
        title: "Maynooth Castle",
        description: "Historic medieval castle located in the heart of Maynooth.",
        image: Img7,
        mapLink: "https://maps.app.goo.gl/y6fxBgw46t3vxhJ7A"
      },
      {
        title: "Carton House Estate",
        description: "Beautiful historic estate with gardens and walking trails.",
        image: Img8,
        mapLink: "https://maps.app.goo.gl/ekStNg5mz1MJcxum6"
      },
      {
        title: "St Patrick's College Maynooth",
        description: "Historic university campus with stunning architecture.",
        image: Img9,
        mapLink: "https://maps.app.goo.gl/jaJ8oJdpaApdXB2v9"
       },
      // {
      //   title: "Carton Avenue Walk",
      //   description: "Peaceful walking route through tree-lined avenue.",
      //   image: placeImg,
      //   mapLink: "https://maps.app.goo.gl/jaJ8oJdpaApdXB2v9"
      // },
      // {
      //   title: "Maynooth Harbour",
      //   description: "Quiet scenic canal harbour along the Royal Canal.",
      //   image: placeImg,
      //   mapLink: "https://maps.app.goo.gl/jaJ8oJdpaApdXB2v9"
      // },
      {
        title: "Donadea Forest Park",
        description: "Beautiful forest park near Maynooth with trails and lake.",
        image: Img10,
        mapLink: "https://maps.app.goo.gl/jaJ8oJdpaApdXB2v9"
      }
    ],

    Cork: [
      {
        title: "Blarney Castle",
        description: "Famous castle where visitors kiss the Blarney Stone.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/9wH7Xh1gM4j6z4fY7"
      },
      {
        title: "English Market",
        description: "Historic food market with local produce and cuisine.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/cdPgpcbHuoNHTNvL6"
      },
      {
        title: "St Fin Barre's Cathedral",
        description: "Beautiful Gothic cathedral in Cork city.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/cdPgpcbHuoNHTNvL6"
      },
      {
        title: "Fitzgerald Park",
        description: "Popular riverside park with gardens and museum.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/cdPgpcbHuoNHTNvL6"
      },
      {
        title: "Spike Island",
        description: "Historic island fortress known as Ireland's Alcatraz.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/cdPgpcbHuoNHTNvL6"
      },
      {
        title: "Cork City Gaol",
        description: "Historic prison museum showcasing Cork history.",
        image: placeImg,
        mapLink: "https://maps.app.goo.gl/cdPgpcbHuoNHTNvL6s"
      }
    ]

  };

  const attractions = attractionsData[city] || [];

  return (
    <>
      <BackButton />

      <div className="tourist-page">

        <div className="tourist-hero">
          <h1>{city} Tourist Attractions</h1>
          <p>Explore the most beautiful and iconic destinations in {city}</p>
        </div>

        <div className="tourist-grid">

          {attractions.map((place, index) => (

            <div key={index} className="tourist-card">

              <div className="card-image">
                <img src={place.image} alt={place.title} />
              </div>

              <div className="card-content">
                <h3>{place.title}</h3>
                <p>{place.description}</p>

                <button
                  onClick={() => window.open(place.mapLink, "_blank")}
                >
                  Explore Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default TouristAttractions;
