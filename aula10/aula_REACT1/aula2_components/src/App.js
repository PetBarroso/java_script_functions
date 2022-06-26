import "./App.css";
import Header from "./components/Header";
//import { Footer } from "./components/Footer/Index";
//import SelectWrapper from "./components/Select";
import { Card } from "./components/Card/index";

function App() {
  return (
    <div className="app">
      <Header />
      <Card cor="red" botao="Rich" foto="https://ideias.avancadas.info/images/ideias-imagempessoal.png"/>
      <Card cor="blue" botao="ET" foto="https://enemaneiras.com.br/wp-content/uploads/2021/09/imagem-png-com-transparencia.png"/>
      
    </div>
  );
}

export default App;
