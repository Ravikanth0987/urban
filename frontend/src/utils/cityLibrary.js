export function formatCityName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function getCityImage(imageName) {
  return imageName
    ? `http://localhost:5000/uploads/${imageName}`
    : "https://via.placeholder.com/300";
}