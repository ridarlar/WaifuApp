import Footer from './components/footer';
import Header from './components/header';
import './components/style/root.css';
import Background from './components/background';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div >
      <Router>
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Background />
              }
            />
            <Route
              path="/:type/:category"
              element={<Background />}
            />

          </Routes>
        </div>
        <Footer />

      </Router>

    </div>
  );
}

export default App;