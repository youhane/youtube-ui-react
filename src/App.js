import './App.css';

// Components
import TopNavbar from './Components/TopNavbar';
import SideNavbar from './Components/SideNavbar';

const App = () => {
  return (
    <div className="App flex">
      <div>
        <SideNavbar />
      </div>
      <div>
        <TopNavbar />
      </div>
    </div>
  );
}

export default App;
