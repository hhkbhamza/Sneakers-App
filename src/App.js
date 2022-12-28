import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
