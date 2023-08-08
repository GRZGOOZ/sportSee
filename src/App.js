import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/sportSee" element={<Dashboard />} />
          <Route path="/sportSee/:id" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;