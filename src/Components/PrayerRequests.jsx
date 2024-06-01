
import React, { useState } from "react";
import "./PrayerRequests.css";
import Grid from "@mui/material/Grid";
import emailjs from 'emailjs-com';

function PrayerRequests() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    prayerRequest: "",
    notARobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Sonika Ravi",
      message_html: formData.prayerRequest, 
    };
  

    
    emailjs
    .send(
      "service_fqn4ym8",
      "template_3t1809l",
      templateParams,
      "QsjqlBOFBSAZqEg6S"
    )
    .then((response) => {
      console.log("Email successfully sent!", response.status, response.text);
      setFormData({
        name: "",
        email: "",
        phone: "",
        prayerRequest: "",
        notARobot: false,
      });
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
};

  return (
    <div>
       <div className="Prayer">
      <div className="Header">
        <h1>CONTACT US</h1>
        <h4>
          "For I know the plans I have for you,
          declares the Lord, plans for welfare and not for evil, to give you a
          future and a hope." - Jeremiah 29:11 
        </h4>
        <p>
          In moments of uncertainty, may you find strength in the reassuring
          words of Jeremiah 29:11. Our prayer team will uplift you in their
          prayers, asking for guidance, comfort, and blessings as you navigate
          through life's journey. Trust in God's unwavering plan, knowing that
          He holds your future in His hands. You are not alone, for our prayers
          are with you, believing in His grace and mercy to see you through."
        </p>
      </div>
      <div className="grid">
        <Grid container>
          <Grid item lg={6} sm={12}>
            <div className="Form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Prayer Request:</label>
                  <textarea
                    name="prayerRequest"
                    value={formData.prayerRequest}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="notARobot"
                      checked={formData.notARobot}
                      onChange={handleChange}
                      required
                    />
                    I'm not a robot
                  </label>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div className="TextContainer">
              <div className="Info">
                <h2>For Prayer</h2>
                <h2>CALL : 0123456789</h2>
                <h2>EMAIL : jeeva@gmail.com</h2>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
   
    </div>
  );
}

export default PrayerRequests;
