import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Shared } from "./pages/Shared";
import { RequiresAuth } from "./utils/auth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/details/:user"
          element={
            <RequiresAuth>
              <Details />
            </RequiresAuth>
          }
        />
        <Route
          path="/shared-chart/:encodedData"
          element={
            <RequiresAuth>
              <Shared />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
