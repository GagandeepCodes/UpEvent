import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<Home/>}></Route>
          <Route exact path="/events" element = {<Events/>}></Route>
          <Route exact path="/register" element = {<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
