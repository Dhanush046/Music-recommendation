import "./App.css";
import Login from "./login/Login";
import Homepage from "./homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/search" element={<SearchBar />}/>
      </Routes>
    </Router>
  );
}

export default App;
