import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Done from "./components/Done";
import Order from "./components/Order";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/done">
          <Done order={order} />
          <Footer />
        </Route>
        <Route path="/order">
          <Order setOrder={setOrder} />
          <Footer />
        </Route>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
