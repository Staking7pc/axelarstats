import './App.css';
import ValidatorInfo from "./components/ValidatorInfo";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <ValidatorInfo />
    </div>
  );
}

export default App;
