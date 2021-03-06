import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Stack from "./pages/Stack/Stack";
import Contact from "./pages/Contact/Contact";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
