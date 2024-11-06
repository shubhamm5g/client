import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ContactForm from "./Pages/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
