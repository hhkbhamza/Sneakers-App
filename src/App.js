import "./App.css";
import { useState } from "react";
import GalleryPage from "./pages/GalleryPage";
import AuthPage from "./pages/AuthPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service"
import SneakerPage from "./pages/SneakerPage"

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={getUser()} setUser={setUser}/>
          <Routes>
            <Route path="/gallery/:id" element={<SneakerPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
