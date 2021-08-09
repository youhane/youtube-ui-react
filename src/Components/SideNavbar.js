import react from "react";

// Components
import TransparentButton from "./TransparentButton";
import RedHoverButton from "./RedHoverButton";

const SideNavbar = () => (
    <nav className="flex flex-col">
        <TransparentButton icon="bars" size="lg" />
        <RedHoverButton icon="home" name="Home" />
        <RedHoverButton icon="compass" name="compass" />
        <RedHoverButton icon="video" name="Subs" />
        <RedHoverButton icon="book" name="Book" />
    </nav>
);

export default SideNavbar;