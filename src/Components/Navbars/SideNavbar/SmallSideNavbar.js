// Components
import RedHoverButton from "../../Buttons/RedHoverButton";

const SmallSideNavbar = (props) => (
    <nav className="flex flex-col my-5" onClick={props.setShowBigNav}>
        <RedHoverButton icon="home" name="Home" />
        <RedHoverButton icon="compass" name="Explore" />
        <RedHoverButton icon="video" name="Subscriptions" />
        <RedHoverButton icon="book" name="Library" />
    </nav>
);

export default SmallSideNavbar;