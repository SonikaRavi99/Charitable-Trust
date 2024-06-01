import React from "react";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";


function Contact() {
  return (
    <div className="Contact">
      <div className="Info">
        <Grid container spacing={2}>
          <Grid item lg={3} xs={12}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC47KLgtzYFOVQeEi_yXMPNKq_gxVha9eA0A&s" className="ContactLogo" width={160} height={160} alt="Logo" />
          </Grid>
          <Grid item lg={4} md={6} xs={5}>
          <h2>Quick Links</h2>
            <div className="quicklinks">
              <NavLink to="/Do" activeClassName="active">
              What We Do
              </NavLink>
              <NavLink to="/vision" activeClassName="active">
                Our Vision
              </NavLink>
              <NavLink to="/programs" activeClassName="active">
                Ministries
              </NavLink>
              <NavLink to="/prayer-requests" activeClassName="active">
                Prayer Requests
              </NavLink>
            </div>
          </Grid>
          <Grid item lg={3} xs={6}>
            <div>
              <h2 sx={{ paddingTop: 0 }}>Contact Us</h2>
              <p>
                <LocationOnIcon sx={{ fontSize: "medium", marginRight: "5px" }} /> Jeeva Charitable Trust
               
                <br />
                LBS Nagar, HAL
                <br />
                Bangalore, Karnataka
              </p>
              <p>
                <PhoneIcon sx={{ fontSize: "medium", marginRight: "5px" }} /> 0123456789
              </p>
              <p>
                <EmailIcon sx={{ fontSize: "medium", marginRight: "5px" }} /> jeeva@gmail.com
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
