// import { useEffect, useState } from "react";
// import API from "../../api/api";
// // import "../styles/managehotel.css";
// function ManageHotels() {

//   const [hotels, setHotels] = useState([]);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState("");
//   const [mapLink, setMapLink] = useState("");
//   const [preview, setPreview] = useState("");

//   const logout = () => {
//     localStorage.removeItem("adminAuth");
//     window.location.href = "/admin";
//   };

//   const fetchHotels = async () => {
//     try {
//       const res = await API.get("/hotels");
//       setHotels(res.data);
//     } catch (error) {
//       console.log("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const addHotel = async () => {

//     if (!name) {
//       alert("Please enter hotel name");
//       return;
//     }

//     if (!image) {
//       alert("Please select an image");
//       return;
//     }

//     try {

//       const formData = new FormData();

//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("mapLink", mapLink);
//       formData.append("image", image);

//       await API.post("/hotels", formData);

//       setName("");
//       setDescription("");
//       setMapLink("");
//       setImage(null);
//       setPreview("");

//       fetchHotels();

//     } catch (error) {
//       console.log("Upload error:", error);
//     }

//   };

//   const deleteHotel = async (id) => {

//     try {
//       await API.delete(`/hotels/${id}`);
//       fetchHotels();
//     } catch (error) {
//       console.log("Delete error:", error);
//     }

//   };

//   const handleImageChange = (e) => {

//     const file = e.target.files[0];

//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }

//   };

//   return (
//     <div style={{ padding: "30px" }}>

//       <div style={{display:"flex",justifyContent:"space-between"}}>
//         <h2>Admin - Manage Hotels</h2>
//         <button onClick={logout}>Logout</button>
//       </div>

//       <div style={{
//         border:"1px solid #ddd",
//         padding:"20px",
//         width:"350px",
//         marginBottom:"30px"
//       }}>

//         <input
//           placeholder="Hotel Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="file"
//           onChange={handleImageChange}
//         />

//         <br /><br />

//         {preview && (
//           <img src={preview} alt="preview" width="200" />
//         )}

//         <br /><br />

//         <textarea
//           placeholder="Hotel description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <br /><br />

//         <input
//           placeholder="Google Map Link"
//           value={mapLink}
//           onChange={(e) => setMapLink(e.target.value)}
//         />

//         <br /><br />

//         <button onClick={addHotel}>
//           Add Hotel
//         </button>

//       </div>

//       <h3>Hotel List</h3>

//       <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

//         {hotels.map((hotel) => (

//           <div key={hotel.id} style={{
//             border:"1px solid #ccc",
//             padding:"10px",
//             width:"250px",
//             textAlign:"center"
//           }}>

//             <h4>{hotel.name}</h4>

//             {hotel.image && (
//               <img
//                 src={`http://localhost:5000/uploads/${hotel.image}`}
//                 alt={hotel.name}
//                 width="200"
//               />
//             )}

//             <p>{hotel.description}</p>

//             <a href={hotel.mapLink} target="_blank" rel="noreferrer">
//               View Map
//             </a>

//             <br /><br />

//             <button onClick={() => deleteHotel(hotel.id)}>
//               Delete
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default ManageHotels;
import ManageItems from "./ManageItems";

export default function ManageHotels() {
  return <ManageItems title="Hotels" endpoint="hotels" />;
}