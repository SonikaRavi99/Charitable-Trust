import "./App.css";
import Appbar from "./Components/Appbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Advertise from "./Components/Advertise";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Donate from "./Components/Donate";
import Programs from "./Components/Programs";
import Vission from "./Components/Vision";
import Donation from "./Components/Donation";
import Do from "./Components/Do";
import Visit from "./Components/Visit";
import PrayerRequests from "./Components/PrayerRequests";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/vision" element={<Vission />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/do" element={<Do />} />
        <Route path="/prayer-requests" element={<PrayerRequests />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
