import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ToDo from "./pages/ToDo.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Error from "./pages/Error.tsx";
import Calculator from "./pages/Calculator.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/todo" Component={ToDo} />
        <Route path="/calculator" Component={Calculator} />
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}
