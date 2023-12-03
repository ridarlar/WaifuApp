import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Background from "./components/Background";
import Information from "./components/Information";
import Navbar from "./components/NavBar";
import "../src/components/style/root.css"


function App() {

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '5px', }} />
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
            element={
              <Background />
            }
          />

          <Route
            path="/waifu-app/information"
            element={
              <Information />
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;