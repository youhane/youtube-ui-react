import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";

const SideNavbar = () => {
    return (
        <nav>
            <SmallSideNavbar />
            <ExpandedSideNavbar />
        </nav>
    )
}

export default SideNavbar;