import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function TransportBooking() {

  const { city } = useParams();

  return (
    <>
      <BackButton />

      <div>
        <h1>{city} Transport Booking</h1>

        <h2>Coming Soon</h2>

        <p>This feature will be available soon.</p>
      </div>
    </>
  );
}

export default TransportBooking;
