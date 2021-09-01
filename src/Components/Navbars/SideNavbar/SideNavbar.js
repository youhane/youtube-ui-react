import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";

const SideNavbar = () => {
    return (
        <nav>
            <SmallSideNavbar />
            <ExpandedSideNavbar title="stuff" />
        </nav>
    )
}

export default SideNavbar;