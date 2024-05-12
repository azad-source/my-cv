import "normalize.css";
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { CvPage } from "./page/CvPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-page" element={<CvPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
