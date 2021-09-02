// Components
import RedHoverButton from "../../Buttons/RedHoverButton";
import Proptypes from 'prop-types';

const SmallSideNavbar = () => (
    <nav className="flex flex-col my-5">
        <RedHoverButton icon="home" name="Home" />
        <RedHoverButton icon="compass" name="Explore" />
        <RedHoverButton icon="video" name="Subscriptions" />
        <RedHoverButton icon="book" name="Library" />
    </nav>
);

SmallSideNavbar.propTypes = {
    visibility: Proptypes.bool
}

export default SmallSideNavbar;