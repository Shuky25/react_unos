import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aplikacija from "./pages/Aplikacija";
import Layout from "./pages/Layout";
import Unos from "./pages/Unos";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/aplikacija" element={<Aplikacija />} />
            <Route path="/unos" element={<Unos />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
