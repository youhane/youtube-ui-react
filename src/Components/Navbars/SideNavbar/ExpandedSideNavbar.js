// Components
import LongSideButton from "../../Buttons/LongSideButton";

const ExpandedSideNavbar = ({ title }) => (
    <nav className="flex-col my-5">
        <h1 className="border-t-2 uppercase font-semibold pl-4 py-2">{title}</h1>
        <LongSideButton title="Home" icon="home" />
        <LongSideButton title="Explore" icon="compass" />
        <LongSideButton title="Subscriptions" icon="video" />
        <LongSideButton title="Library" icon="book" />
        <LongSideButton title="Home" icon="home" />
        <LongSideButton title="Explore" icon="compass" />
        <LongSideButton title="Subscriptions" icon="video" />
        <LongSideButton title="Library" icon="book" />
    </nav>
)


export default ExpandedSideNavbar;