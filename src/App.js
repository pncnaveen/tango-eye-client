import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Barchart from "./components/Barchart";
import Linechart from "./components/Linechart";
import Navbar from "./components/Navbar";
import Piechart from "./components/Piechart";
import Scatterplot from "./components/Scatterplot";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/home/bar" exact component={Barchart}></Route>
          <Route path="/home/line" exact component={Linechart}></Route>
          <Route path="/home/pie" exact component={Piechart}></Route>
          <Route path="/home/scatter" exact component={Scatterplot}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
