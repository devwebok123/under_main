import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/under_main" element={<Home />} />
    </Routes>
  );
}

export default App;
