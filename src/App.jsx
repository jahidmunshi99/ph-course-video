import { useState } from "react";
import Home from "./assets/Pages/Home";
import { Footer } from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  const [showLogIn, setShowLogin] = useState(false);

  const handleLoginForm = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Header onLogin={handleLoginForm} />
      {/* <Board /> */}
      <Home
        onLogin={handleLoginForm}
        showLogIn={showLogIn}
        onClose={() => {
          setShowLogin(!showLogIn);
        }}
      />
      <Footer />
    </>
  );
}

export default App;
