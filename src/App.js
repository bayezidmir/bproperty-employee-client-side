import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import UpdateUser from "./components/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="add/user" element={<AddUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
