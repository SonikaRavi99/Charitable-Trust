import "./Donate.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Donation.css";
import Contact from "./Contact";
import React, { useState } from "react";
import Razorpay from "./Razorpay"

function Donation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    nationality: "",
    bankName: "",
    bankBranch: "",
    amount: "",
    bankState: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Example code to redirect to Razorpay
    window.location.href = "https://api.razorpay.com/v1/payment_links";
  };

  return (
    <div className="DonationMain">
      <div className="Donation">
        <Grid container spacing={3}>
          <Grid item lg={6} sm={12}>
            <div className="DonationText">
              <h1>Make A Big difference By Small Effort.</h1>
              <p>
                {" "}
                We are very greatful to you for your Donations, Your littel
                effort helps us to change a big community.{" "}
              </p>

              <div>
                <Button
                  onClick={() => {
                    document
                      .getElementById("donationForm")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    bgcolor: "white",
                    color: "#334257",
                    padding: "10px",
                    border: "2px",
                    marginTop: "20px",
                    justifyContent: "flex-start",
                    "&:hover": {
                      borderColor: "white",
                      color: "white",
                      border: "2px solid white",
                    },
                  }}
                >
                  {" "}
                  Donate Now{" "}
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item lg={5} sm={12}>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/09/43/80/360_F_209438048_bqYPR1SZJx583icNF2fasiwfnttqMZZn.jpg"
                alt="Charity"
                className="DonationImage"
              ></img>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="BankDetails">
        <Grid container spacing={1}>
          <Grid item lg={6} sm={12}>
            <div className="Details">
              <Grid container spacing={3}>
                <Grid item lg={12} sm={2}>
                  <h2>Donate to Jeeva Charitable Trust</h2>
                  <h4>Bank Details :</h4>
                  <div style={{ paddingLeft: "40px" }}>
                    <p>Bank Name: XYZ</p>
                    <p>ACC NAme: Jeeva Trust</p>
                    <p>AccNo: XXXXXXXXXXXXXX</p>
                    <p>Branch: Bangalore</p>
                    <p>IFSC Code: ABC000000</p>
                  </div>
                </Grid>
                <Grid item lg={6} sm={2}>
                  <h4>Pay through QR Code:</h4>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2/QR-Code-PNG-Picture.png"
                    alt="Donation"
                    width="150px"
                    height={"150px"}
                    style={{ padding: "40px" }}
                  ></img>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div className="FormContainer" id="donationForm">
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
                className="Form"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
               
                <input
                  type="text"
                  placeholder="Bank Name"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <input
                  type="text"
                  placeholder="Bank Branch"
                  name="bankBranch"
                  value={formData.bankBranch}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  style={{ marginBottom: "20px" }}
                />
                <Razorpay />
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      <Contact />
    </div>
  );
}

export default Donation;
