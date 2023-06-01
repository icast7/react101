import {ReactComponent as Logo} from './logo.svg'
import './App.css';
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{height: 50}}/>
        <h1>Hello Radixweb!</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
