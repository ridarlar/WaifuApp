
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/NavBar";

function App() {

  return (
    <Router>
      <Navbar/>
      <div>
      <Routes>
            <Route
              path="/waifu-app"
              element={
                <Background />
              }
            />
            <Route
              path="/waifu-app/:type/:category"
              element={<Background />}
            />

          </Routes>
      </div>
    </Router>
  );
}

export default App;