import Navbar from "./Navbar";
import Textedit from "./Textedit";
import About from "./About";
import {
  Route, 
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Textedit />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
    </>
  );
}
