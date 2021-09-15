// Components
import TopNavbar from './Components/Navbars/TopNavbar/TopNavbar';
import SideNavbar from './Components/Navbars/SideNavbar/SideNavbar';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import Videos from './Components/Videos';

import BigSideNavbar from './Components/Navbars/SideNavbar/BigSideNavbar';

const App = () => {
  return (
    <div className="App flex overflow-x-hidden">
      <BigSideNavbar />
      {/* <div className="divide-y">
        <TopNavbar />
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
      </div> */}
    </div>
  );
}

export default App;
