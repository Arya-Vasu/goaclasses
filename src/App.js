import { Switch, Route } from "react-router-dom";
import { AboutUs } from "./AboutUs/AboutUs";
import "./App.css";
import { ContactUs } from "./ContactUs/ContactUs";
import { Courses } from "./Components/Courses";
import { Home } from "./Home/Home";
import { Header } from "./GlobalHeader/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
      </Switch>
    </div>
  );
}

