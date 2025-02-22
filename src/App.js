import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/header/Navbar'; // Importer Navbar (Navigasjonsbar)
import Dashboard from './components/Dashboard.js'; // Importer Dashboard
import Home from './components/Home.js'; // Importer Hjemmeside
import Feed from './components/Feed.js'; // Importer Feed
import Create from './components/Create.js'; // Importer Lag annonse
import './App.css'; // Din CSS-fil

function App() {
  // State for å lagre brukerdata når de er pålogget
  const [user, setUser] = useState(null);

  // Håndter Google pålogging
  const handleLogin = (userData) => {
    setUser(userData); // Setter brukerdata når pålogging lykkes
  };

  // Håndter utlogging
  const handleLogout = () => {
    setUser(null); // Nullstiller brukerdata ved utlogging
  };

  return (
    // GoogleOAuthProvider gir tilgang til Google autentisering via Google API
    <GoogleOAuthProvider clientId="709088627736-12g1a9mvoa425l6nsqnqk7el7os9ii1b.apps.googleusercontent.com">
      <BrowserRouter>
        {/* Nvbar komponenten viser navigasjonsbaren øverst */}
        <Navbar user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
        <div className="content">
          {/* Routs definerer hvilken komponent som skal vises basert på URL */}
          <Routes>
            {/* Hjemmeside  viser Home komponenten */}
            <Route path="/" element={<Home />} />
            {/* Employer ruter  Dashboard og Create annonser */}
            <Route path="/employer" >
              <Route path="/employer/dashboard" element={<Dashboard />} />
              <Route path="/employer/create" element={<Create />} />
            </Route>
            {/* Employee rute  viser Feed med jobber */}
            <Route path="/employee/feed" element={<Feed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
