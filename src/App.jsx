import "./App.css";
import FormPage from "./FormPage";
import HomePage from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuccessPage from "./SuccessPage";
import Gallery from "./Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
