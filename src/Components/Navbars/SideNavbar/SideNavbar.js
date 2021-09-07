// Components
import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";

const SideNavbar = () => {
    return (
        <nav>
            <SmallSideNavbar />
            <ExpandedSideNavbar />
            <ExpandedSideNavbar title="stuff" />
        </nav>
    )
};

export default SideNavbar;