import { useEffect, useState } from "react";
import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaginaCaso from "./components/PaginaCaso";

function App() {
  const [casos, setCasos] = useState([]);

  useEffect(() => {
    fetch("src/assets/db.json")
      .then((res) => res.json())
      .then((data) => setCasos(data));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        {casos?.map((caso) => (
          <Route
            key={caso.id}
            path={`${caso.cliente}`}
            element={<PaginaCaso data={caso} />}
          />
        ))}
        <Route path="/" element={<Inicio />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
