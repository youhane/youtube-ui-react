import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";
import TransparentButton from "../../Buttons/TransparentButton";

const SideNavbar = () => {
    return (
        <nav>
            <button className="bg-green-400 mt-6 mx-14">
                <TransparentButton icon="bars" size="lg" />
            </button>
            <SmallSideNavbar />
            <ExpandedSideNavbar />
            <ExpandedSideNavbar title="stuff" />
        </nav>
    )
}

export default SideNavbar;