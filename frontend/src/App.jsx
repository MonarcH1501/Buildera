import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWrapper from './layout/template';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
];

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={<LayoutWrapper>{element}</LayoutWrapper>} />
        ))}
      </Routes>
    </Router>
  );
}
