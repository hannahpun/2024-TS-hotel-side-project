import Signup from "@/components/pages/Signup/Signup";
import LayoutDefault from "@components/layout/LayoutDefault";
import Dashboard from "@components/pages/Dashboard";
import Login from "@components/pages/Login";
import NotFound from "@components/pages/NotFound";
import Room from "@/components/pages/Room/Room";
import User from "@components/pages/User/User";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/room" element={<Room />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutDefault>
  );
}

export default App;
