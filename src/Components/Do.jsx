import React from "react";
import "./Do.css";
import Contact from "./Contact";
import Utils from "./Utils";

const data = [
  {
    id: 1,
    image:
      "https://wishesandblessings.net/blog/wp-content/uploads/2022/05/DSC00649-1-scaled.jpg",
    heading:"Orphanage",
    text: " We are dedicated to providing compassionate care and support to our elderly community through our Old Age Home initiative. Our missionis to create a nurturing environment where seniors can live with dignity and comfort, receiving personalized healthcare, nutritious meals, engaging activities, and emotional companionship. We strive to ensure that every resident feels valued, respected, and cherished, fostering a sense of belonging and community in their golden years. Join us in our commitment to enriching the lives of our elderly population and making a positive impact in our community.",
  },
  {
    id: 2,
    image:
      "https://kettocdn.gumlet.io/media/campaign/530000/530888/image/6180cb963c774.jpeg?w=400&dpr=2.6",
    heading:"Old Age Home",
    text: "  Our Orphanage program stands as a beacon of hope and support for vulnerable children in need. We are dedicated to providing a loving and nurturing environment where orphaned and abandoned children can thrive, grow, and fulfill their potential. Our mission is to offer comprehensive care, including shelter, education, healthcare, and emotional support, ensuring that every child receives the love, guidance, and opportunities they deserve. Through our Orphanage, we strive to empower these children to build brighter futures, filled with hope, resilience, and possibilities. Join us in our mission to make a difference in the lives of orphaned children and provide them with the care and opportunities they need to succeed.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsoLZC_heuPNpkogk6f4YdIrCtfKEASDdaQ&usqp=CAU",
    heading:"Education",
    text: "  We believe that education is the key to unlocking the potential of every child, regardless of their background or circumstances. That why we're committed to providing free education to children in need through our educational programs. Our mission is to break down barriers to learning and ensure that every child has access to quality education, regardless of their financial situation. Through our free education initiatives, we aim to create a brighter future for generations to come, where every child has the opportunity to thrive and succeed. Join us in our mission to make education accessible to all and create a more equitable and inclusive society.",
  },
  {
    id: 4,
    image:
      "https://cdn.who.int/media/images/default-source/health-topics/disability/2-10-facts-on-people-with-disabilities.jpg?sfvrsn=d4fd96_18",
    heading:"Disabled",
    text: " We are dedicated to empowering individuals with disabilities to live fulfilling and independent lives. Through our programs and services, we strive to break down barriers and create inclusive communities where people of all abilities can thrive. Our mission is to provide comprehensive support, resources, and opportunities for individuals with disabilities to achieve their goals and participate fully in society. From accessibility initiatives to vocational training and employment support, we offer a range of programs tailored to the unique needs and aspirations of each individual. Together, we can build a more inclusive and accessible world where everyone has the opportunity to reach their full potential, regardless of their abilities. Join us in our commitment to empowering individuals with disabilities and creating a more inclusive society for all.",
  },
  {
    id: 5,
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*qf7mvPmIwNRznFDWOkdscw.png",
    heading:"Charity",
    text: " Our mission is to make a positive impact in the lives of those in need, both locally and globally. Through our charity initiatives, we strive to address pressing social issues, alleviate suffering, and promote equality and justice for all. From providing essential resources such as food, shelter, and healthcare to supporting education, empowerment, and community development programs, we are committed to making a difference in the lives of individuals and communities facing adversity. With the support of generous donors, dedicated volunteers, and passionate advocates, we work tirelessly to create positive change and build a better world for future generations. Join us in our mission to spread kindness, compassion, and hope, and together, we can make a meaningful difference in the world.",
  },
];

function Do() {
  return (
    <div>
      <div className="Do">
        <h1 style={{ textAlign: "center" }}>What We Do</h1>
        <div className="Cards">
          <Utils data={data} />
        </div>
      </div>
      <Contact />
    </div>
  );
}
export default Do;
