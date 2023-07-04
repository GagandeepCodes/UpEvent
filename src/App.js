import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
