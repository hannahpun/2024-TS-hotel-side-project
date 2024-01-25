import Signup from "@/components/pages/Signup/Signup";
import LayoutDefault from "@components/layout/LayoutDefault";
import Dashboard from "@components/pages/Dashboard";
import Login from "@components/pages/Login";
import ResetPW from "@components/pages/ResetPW";
import NotFound from "@components/pages/NotFound";
import Room from "@/components/pages/Room/Room";
import RoomDetail from "@/components/pages/Room/RoomDetail";  // 房型詳細頁
import User from "@components/pages/User/User";
import Book from "@components/pages/Book/Book";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/reset" element={<ResetPW />} />
        <Route path="/room" element={<Room />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/room/:id/book" element={<Book />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutDefault>
  );
}

export default App;
