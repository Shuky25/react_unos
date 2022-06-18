import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Aplikacija from "./pages/Aplikacija";
import Unos from "./pages/Unos";
import Layout from "./pages/Layout";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Aplikacija />} />
                <Route path="/unos" element={<Unos />} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
