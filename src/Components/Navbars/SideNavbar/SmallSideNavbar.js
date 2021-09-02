// Components
import RedHoverButton from "../../Buttons/RedHoverButton";

const SmallSideNavbar = ({ visibility }) => (
    <nav className="flex flex-col my-5">
        <RedHoverButton icon="home" name="Home" />
        <RedHoverButton icon="compass" name="Explore" />
        <RedHoverButton icon="video" name="Subscriptions" />
        <RedHoverButton icon="book" name="Library" />
    </nav>
)

export default SmallSideNavbar;