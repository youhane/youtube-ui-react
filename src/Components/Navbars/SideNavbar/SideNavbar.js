// Components
import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";

const SideNavbar = ({ small }) => {
    return (
        <nav onClick={!small}>
            {small ? (
                <SmallSideNavbar />
            ) : (
                <div id="bigNav">
                    <ExpandedSideNavbar />
                    <ExpandedSideNavbar title="stuff" />
                </div>
            )}


        </nav>
    )
};

export default SideNavbar;