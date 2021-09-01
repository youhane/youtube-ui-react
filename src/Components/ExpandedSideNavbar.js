// Components
import LongSideButton from "./LongSideButton";

const ExpandedSideNavbar = () => {
    <nav className="flex flex-col my-5" id="bigNav">
        <LongSideButton icon="bars" />
        <LongSideButton icon="home" />
        <LongSideButton icon="compass" />
        <LongSideButton icon="video" />
        <LongSideButton icon="book" />
    </nav>
}

export default ExpandedSideNavbar;