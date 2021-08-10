import './App.css';

// Components
import TopNavbar from './Components/TopNavbar';
import SideNavbar from './Components/SideNavbar';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import Videos from './Components/Videos';

const App = () => {
  return (
    <div className="App flex">
      <div>
        <SideNavbar />
      </div>
      <div className="divide-y ">
        <TopNavbar />
        <CategorySlider />
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
