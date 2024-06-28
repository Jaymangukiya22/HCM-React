import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Input from "./components/Input";
import Settings from "./components/Settings";
import Account from "./components/Account";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Container />} />
        <Route exact path="/details" element={<Input />} />
        <Route exact path="/checkup" element={<Input />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Account />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
