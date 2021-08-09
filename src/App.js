import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';


import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)

const App = () => {
  return (
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;
