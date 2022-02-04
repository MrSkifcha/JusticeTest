import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import "./styles/app.css";
import "./styles/media.scss"


function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
