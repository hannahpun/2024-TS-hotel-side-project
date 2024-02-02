import Signup from "@/components/pages/Signup/Signup";
import LayoutDefault from "@components/layout/LayoutDefault";
import LayoutNoFooter from "@components/layout/LayoutNoFooter";
import RequireAuth from "@components/layout/RequireAuth";
import Dashboard from "@components/pages/Dashboard";
import Login from "@components/pages/Login";
import ResetPW from "@components/pages/ResetPW";
import NotFound from "@components/pages/NotFound";
import Room from "@/components/pages/Room/Room";
import RoomDetail from "@/components/pages/Room/RoomDetail"; // 房型詳細頁
import User from "@components/pages/User/User";
import Book from "@components/pages/Book/Book";
import { Route, Routes } from "react-router-dom";
import BookSuccess from "@/components/pages/BookSuccess/BookSuccess";

function App() {
  return (
    <>
      <LayoutNoFooter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password/reset" element={<ResetPW />} />
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/room" element={<Room />} />
            <Route path="/room/:id" element={<RoomDetail />} />
            <Route
              path="/room/:id/book"
              element={
                <RequireAuth>
                  <Book />
                </RequireAuth>
              }
            />
            <Route
              path="/user"
              element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
            />
            <Route
              path="/:orderId/BookSuccess"
              element={
                <RequireAuth>
                  <BookSuccess />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutNoFooter>
    </>
  );
}

export default App;
