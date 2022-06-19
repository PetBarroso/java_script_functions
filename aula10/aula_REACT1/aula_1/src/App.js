import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          E aí! <code>Aqui nasce um Programador!!!</code> No pain no gain!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          clique aqui e se aventure!!!
        </a>
      </header>
    </div>
  );
}

export default App;
