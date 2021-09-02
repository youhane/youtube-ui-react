// Components
import TopNavbar from './Components/Navbars/TopNavbar/TopNavbar';
import SideNavbar from './Components/Navbars/SideNavbar/SideNavbar';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import Videos from './Components/Videos';

const App = () => {
  return (
    <div className="App flex overflow-x-hidden">
      <div className="divide-y">
        <TopNavbar />
        <div className="flex">
          <SideNavbar />
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
