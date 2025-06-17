import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
const App = () => {
  const [route, setRoute] = useState("home");
  return (
    <div>
      <Header onNavigate={setRoute} />
      {route === "home" && <Home />}
      {route === "cart" && <Cart />}
    </div>
  );
};

export default App;
