import React from "react";
import Contact from "./Contact";
import "./Visit.css";
import PrayerRequests from "./PrayerRequests";

function Visit() {
  return (
    <div >
      <div className="prayer">
        <PrayerRequests />
      </div>
      <div className="Visit">
        <h1>OUR LOCATION</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31177.783943244576!2d75.82630088792342!3d12.36798998432462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5a8e673df1dcd%3A0xe7f85adfd6e64727!2sAttur%20Nallur%2C%20Karnataka%20571253!5e0!3m2!1sen!2sin!4v1711038132935!5m2!1sen!2sin"
          className="Map"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Contact />
    </div>
  );
}
export default Visit;
