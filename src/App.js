import "./App.css";
import { useState } from "react";
import GalleryPage from "./pages/GalleryPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { getUser } from "./utilities/users-service"

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={getUser()} setUser={setUser}/>
          <Routes>
            <Route path="/gallery/cart" element={<CartPage />} />
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
