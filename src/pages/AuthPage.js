// import SignUpForm from "../components/SignUpForm"
// import LoginForm from "../components/LoginForm"

// function AuthPage({ setUser }) {
//   return (
//     <main>
//       <h1>AuthPage</h1>
//       <SignUpForm setUser={setUser}/>
//       <LoginForm setUser={setUser}/>
//     </main>
//   )
// }

// export default AuthPage

import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div className="logShow">
        <h3 onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Click here to Sign Up" : "Click here to Log In"}
        </h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
