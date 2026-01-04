import { Outlet } from "react-router";
import { Footer } from "./Layout/Footer";
import Header from "./Layout/Header";
import AllRoutes from "./Router";

function App() {
  return (
    <>
      <Header />
        <AllRoutes/>
      <Footer />
    </>
  );
}

export default App;
