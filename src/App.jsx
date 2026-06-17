import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/MainLayout/MainLayout";

import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Admindashboard from "./Components/Admindashboard/Admindashboard";
import Teams from "./Components/Teams/Teams";
import Streams from "./Components/Streams/Streams";
import Community from "./Components/Community/Community";
import Tournaments from "./Components/Tournaments/Tournaments";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/community" element={<Community />} />


        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<Admindashboard />} />


        {/* Any route not defined above will show 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;