import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigation />}  />
      </Routes>
    </div>
  );
}

export default App;
