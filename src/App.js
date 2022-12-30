import "./App.css";
import { useState } from "react";
import GalleryPage from "./pages/GalleryPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/gallery/cart" element={<CartPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
