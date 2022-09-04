import "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
