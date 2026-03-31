import "../styles/ContactsideBar.css";
import contactImg from "../assets/images/dublin.jpg"; // replace with your illustration image
import BackButton from "../components/BackButton";
function Contact() {
  return (
    <>
    <BackButton/>
    <div className="contact-page">

      {/* TOP HEADER */}
      <div className="contact-header">
        <h1>Contact Us / Register Complaint</h1>
        <p>
          Fill the below form if you have any complaints or post your queries
          by filling the below form
        </p>
      </div>

      {/* FORM CARD */}
      <div className="contact-card">

        <div className="contact-image">
          <img src={contactImg} alt="support" />
        </div>

        <form className="contact-form">

          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Comment:</label>
          <textarea rows="4" placeholder="Enter your message"></textarea>

          <button type="submit">Submit</button>

        </form>
      </div>

    </div>
    </>
  );
}

export default Contact;