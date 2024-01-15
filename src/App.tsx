import Login from "@components/pages/Login";
import Signup from "@/components/pages/Signup/Signup";
import Dashboard from "@components/pages/Dashboard";
import LayoutDefault from "@components/layout/LayoutDefault";
import NotFound from "@components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Room from "./components/pages/Room";

function App() {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/room" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutDefault>
  );
}

export default App;
