import * as React from "react";
import "./Donate.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';


function Donate() {
  return (
    <div className="Donate">
      <div className="Text">
        <Grid container >
          <Grid item lg ={5} md={12} sm={12}>
            <img
              src="https://t3.ftcdn.net/jpg/02/09/43/80/360_F_209438048_bqYPR1SZJx583icNF2fasiwfnttqMZZn.jpg"
              alt="Donate"
              width="450px"
              height="300px"
            ></img>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <p sx={{ fontWeight: 2 }}>
              At Jeeva Charitable Trust, we're dedicated to making a real
              difference in people's lives. From providing education and
              healthcare to supporting community development projects, every
              donation we receive goes directly toward helping those in need. We
              ensure that your contribution is used wisely and responsibly,
              making a meaningful impact where it's needed most. With your
              support, we can continue to serve and uplift our communities,
              creating a brighter future for all.
            </p>
            <div className="Button">
              <Button
                sx={{
                  bgcolor: "#334257",
                  color: "white",
                  padding: "10px",
                  border: "2px",
                  "&:hover": {
                    borderColor: "#334257",
                    color: "#334257",
                    border:"2px solid #334257",
                  },
                }}
              >
                {" "}
                <Link to="/donation">Donate Now{" "}
</Link>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Donate;
