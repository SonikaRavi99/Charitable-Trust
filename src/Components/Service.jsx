import * as React from "react";
import "./Service.css";
import Cards from "./Cards";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


const data = [
  {
    id: 1,
    image:
      "https://files.logoscdn.com/v1/files/66328531/assets/14338436/content.jpg?download=true&signature=C3fndG2sqL1JwPxrU3Uk2WHHmz8",
    eventName: " Sunday Prayer",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
  {
    id: 2,
    image:
      "https://ntcminternational.org/wp-content/uploads/2017/02/Womens-7.png",
    eventName: " Sisters Felowshit",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
  {
    id: 3,
    image:
      "https://www.gha.gi/wp-content/uploads/2022/10/visiting-patients-in-hospital.png",
    eventName: " Hospital Visit",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Govt Hospital",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgsVUgNFSM93gR6W7Jmd6qq0OpORGwFu2lk_RJ9rvdw&s",
    eventName: " Fasting Prayer",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
];

function Service() {
  const newData = data.slice(0, 3);
  
  return (
    <div className="Service">
      <div className="Header">
        <h1>OUR MINISTRIES</h1>
        <p>
          Join us as we Worship our Risen Savior, study from the Living word and
          deepen our <br />
          friendship with others who love God.
        </p>
      </div>
      <div className="Cards">
        <Cards data={newData} />
      </div>
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
              border: "2px solid #334257",
            },
          }}
        >
          {" "}
          <Link to="/programs">View All MINISTRIES</Link>
        </Button>
      </div>
    </div>
  );
}

export default Service;
