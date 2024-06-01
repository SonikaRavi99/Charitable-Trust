import * as React from "react";
import "./Service.css";
import Cards from "./Cards";
import Contact from "./Contact";


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
    description: "Service",
    time: "10am- 12pm",
    place: "Govt Hospital",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgsVUgNFSM93gR6W7Jmd6qq0OpORGwFu2lk_RJ9rvdw&s",
    eventName: " Fasting Felowshit",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
  {
    id: 5,
    image:
      "https://files.logoscdn.com/v1/files/66328531/assets/14338436/content.jpg?download=true&signature=C3fndG2sqL1JwPxrU3Uk2WHHmz8",
    eventName: " Sunday Prayer",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
 
  {
    id: 6,
    image:
      "https://ntcminternational.org/wp-content/uploads/2017/02/Womens-7.png",
    eventName: " Sisters Felowshit",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },

  {
    id: 7,
    image:
      "https://files.logoscdn.com/v1/files/66328531/assets/14338436/content.jpg?download=true&signature=C3fndG2sqL1JwPxrU3Uk2WHHmz8",
    eventName: " Sunday Prayer",
    description: "Prayer Service",
    time: "10am- 12pm",
    place: "Jeeva Church",
  },
];

function Programs() {
  
  return (
    <div>
    <div className="Service">
      <div className="Header">
        <h1>OUR MINISTRIES</h1>
        <p>
          At Jeeva Church, we offer a range of programs aimed at
          nurturing spirituality and serving our community. From our weekly
          Sunday Prayer sessions to our Sisters Fellowship gatherings, we
          provide opportunities for worship, reflection, and connection.
          Additionally, our Hospital Visits extend comfort and support to those
          in need. Through these programs, we aim to create a welcoming
          environment where everyone can grow spiritually and contribute
          positively to our community.
        </p>
        
      </div>
      <div className="Cards">
        <Cards data={data} />
      </div>
    </div>
    <Contact />
    </div>
  );
}

export default Programs;
