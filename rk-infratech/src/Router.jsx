
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Commercial from "./pages/Commercial";
import PropertyDetails from "./pages/PropertyDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
