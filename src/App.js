import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Simulator from "./views/simulator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Simulator />} />
      </Routes>
    </>
  );
}

export default App;
