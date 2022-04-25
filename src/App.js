import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1.04.00
import Menu from "./Components/Menu";
import Public from "./Routes/Public";
function App() {
  return (
    <Router>
      <Menu />
      <Public />
    </Router>
  );
}

export default App;
