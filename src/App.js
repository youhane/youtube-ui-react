// Components
import SideNavbar from './Components/Navbars/SideNavbar/SideNavbar';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import Videos from './Components/Videos';
import Navbar from './Components/Navbars/Navbar';

const App = () => {
  return (
    <div className="App flex overflow-x-hidden">
      <div className="divide-y">
        <Navbar />
        <div className="flex">
          <SideNavbar small="true" />
          <div>
            <CategorySlider />
            <Videos />
            <Videos />
            <Videos />
            <Videos title="Covid-19 News" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
