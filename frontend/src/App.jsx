import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Histories from "./components/histories/Histories";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Histories />
              <Posts />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
