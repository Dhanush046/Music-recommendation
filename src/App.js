import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hella World
        </p>
        <a
          className="App-link"
          href="https://cit962.examly.io/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </header>
    </div>
  );
}

export default App;
