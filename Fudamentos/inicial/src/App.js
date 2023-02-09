// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';
import PorDoSol from './assets/por-do-sol.jpg'

// Styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src='/cyber.jpg' alt='tokyo'/>
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={PorDoSol} alt='por-do-sol'/>
      </div>
    </div>
  );
}

export default App;
