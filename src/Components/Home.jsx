import * as React from "react";
import "./Home.css";
import Service from "./Service";
import Advertise from './Advertise';
import Donate from './Donate';
import Contact from './Contact';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
}

function Home() {
  return (
    <>
      <div id="home" className="Home">
        <div className="text">
          <h1>Welcome to Jeeva Charitable Trust</h1>
          <p>
            Go into all the world and proclaim the gospel to the whole creation
            - Mark 16:15
          </p>
        </div>
      </div>
      
      <Service />
      <Advertise />
      <Donate />
      <Contact />
    </>
  );
}

export default App;
