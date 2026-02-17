import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Gallery from "./Component/Gallery";
import CollegeStaff from "./Component/CollegeStaff";
import ContactUs from "./Component/ContactUs";
import StudentCorner from "./Component/StudentCorner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-corner" element={<StudentCorner/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/college-staff" element={<CollegeStaff/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;
