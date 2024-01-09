import Login from "@components/pages/Login";
import Dashboard from "@components/pages/Dashboard";
import LayoutDefault from "@components/layout/LayoutDefault";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <LayoutDefault>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </LayoutDefault>
  );
}

export default App;
