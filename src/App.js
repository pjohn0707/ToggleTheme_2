import './App.css';
import { ThemeProvider } from './Components/ThemeContext';
import Theme from './Components/Theme';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </div>
  );
}

export default App;
