import './App.css';
import ValidatorInfo from "./components/ValidatorInfo";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Boxes from "./components/Boxes";
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Boxes />
      <Cards />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
