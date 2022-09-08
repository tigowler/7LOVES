import "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import MainHome from "./components/mainhome/mainhome";

function App({ authService }) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/home" element={<MainHome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
