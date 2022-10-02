import './App.css';
import ValidatorInfo from "./components/ValidatorInfo";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <ValidatorInfo />
      <Footer />
    </div>
  );
}

export default App;
