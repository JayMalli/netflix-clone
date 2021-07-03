import "./index.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
