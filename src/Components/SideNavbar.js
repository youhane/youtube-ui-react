// Components
import TransparentButton from "./TransparentButton";
import RedHoverButton from "./RedHoverButton";

const SideNavbar = () => (
    <nav className="flex flex-col my-5">
        <TransparentButton icon="bars" size="lg" />
        <RedHoverButton icon="home" name="Home" />
        <RedHoverButton icon="compass" name="Explore" />
        <RedHoverButton icon="video" name="Subscriptions" />
        <RedHoverButton icon="book" name="Library" />
    </nav>
);

export default SideNavbar;