import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
