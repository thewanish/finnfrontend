import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Dashboard  from './components/Dashboard.js';
import  Home  from './components/Home.js';
import  Feed  from './components/Feed.js';
import  Create from './components/Create.js';
import Navbar from './components/header/Navbar.js';

// setter opp rekkefølgen i applikasjonen så det er enklere å navigere
function App() {
  
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;