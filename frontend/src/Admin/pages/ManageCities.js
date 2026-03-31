import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

function ManageCities() {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_API_URL;

  // ✅ AUTH CHECK
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");

    if (!isAuth) {
      navigate("/admin");
    } else {
      fetchCities();
    }
  }, []);

  // ✅ FETCH
  const fetchCities = async () => {
    try {
      const res = await API.get("/cities");
      setCities(res.data || []);
    } catch (error) {
      console.log("Fetch error:", error);
      alert("Failed to load cities");
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  // ✅ IMAGE HANDLE
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image allowed");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ ADD CITY
  const addCity = async () => {
    if (!name.trim()) {
      alert("Enter city name");
      return;
    }

    if (!image) {
      alert("Select image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("image", image);

      await API.post("/cities", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setName("");
      setImage(null);
      setPreview("");

      fetchCities();
    } catch (error) {
      console.log("Upload error:", error);
      alert("Upload failed");
    }
  };

  // ✅ DELETE
  const deleteCity = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await API.delete(`/cities/${id}`);
      setCities((prev) => prev.filter((city) => city.id !== id));
    } catch (error) {
      console.log("Delete error:", error);
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Admin - Manage Cities</h2>
        <button onClick={logout}>Logout</button>
      </div>

      {/* FORM */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          width: "350px",
          marginBottom: "30px",
        }}
      >
        <input
          placeholder="City Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input type="file" onChange={handleImageChange} />

        <br /><br />

        {preview && (
          <img src={preview} alt="preview" width="200" />
        )}

        <br /><br />

        <button onClick={addCity}>Add City</button>
      </div>

      {/* LIST */}
      <h3>City List</h3>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cities.length === 0 ? (
          <p>No cities found</p>
        ) : (
          cities.map((city) => (
            <div
              key={city.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "250px",
                textAlign: "center",
              }}
            >
              <h4>{city.name}</h4>

              {/* ✅ FIXED IMAGE URL */}
              <img
                src={
                  city.image
                    ? `${BASE_URL}/uploads/${city.image}`
                    : "https://via.placeholder.com/200"
                }
                alt={city.name}
                width="200"
              />

              <br /><br />

              <button onClick={() => deleteCity(city.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ManageCities;