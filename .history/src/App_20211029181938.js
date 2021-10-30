import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  GlobalStyles,
  PricingPage,
  Footer,
  ScrollTops,
} from "./Imports/Index";
function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <ScrollTops />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" exact component={PricingPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
