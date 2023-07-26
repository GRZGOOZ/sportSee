import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
