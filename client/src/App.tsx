import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default App;