import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
 

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
