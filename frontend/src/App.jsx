import "./App.css";
import Footer from "./components/footer/footer";
import FrontPage from "./components/FrontPage/FrontPage";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
