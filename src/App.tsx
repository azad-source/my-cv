import "normalize.css";
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { PdfViewPage } from "page/PdfViewPage";

function App() {
  return (
    <BrowserRouter basename="/my-cv/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-pdf" element={<PdfViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
