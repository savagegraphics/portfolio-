import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Content from "./components/Content";
import About from "./pages/About";
import Contact from "./components/Contact";
import Next from "./pages/Next";
import Footer from "./components/Footer";



<meta name="viewport" content="width=device-width, initial-scale=1.0" />


function App() {
  return (
    <div className="main" >

      <Router>
        <div className="flex flex-col justify-between h-full">
          <main className="pb-12 w-full">
            <Routes>
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/content" element={<Content />} />
              <Route path="/next" element={<Next />} />


            </Routes>

            <Footer />
          </main>

        </div>
      </Router>


    </div>
  );
}

export default App;
