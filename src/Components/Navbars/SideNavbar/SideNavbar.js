// Components
import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";

const SideNavbar = () => {
    function toggleBigNavbar() {
        const smallNav = document.getElementById('smallNav');
        const bigNav = document.getElementById('bigNav');

        if (bigNav.classList.contains('hidden') && smallNav.classList.contains('block')) {
            bigNav.classList.add('block');
            bigNav.classList.remove('hidden');
            smallNav.classList.add('hidden');
            smallNav.classList.remove('block');
        } else if (bigNav.classList.contains('block') && smallNav.classList.contains('hidden')) {
            bigNav.classList.add('hidden');
            bigNav.classList.remove('block');
            smallNav.classList.add('hidden');
            smallNav.classList.remove('block');
        }
    }
    return (
        <nav>
            <button id="smallNav" onClick={toggleBigNavbar}>
                <SmallSideNavbar />
            </button>
            {/* <button id="bigNav" onClick={toggleBigNavbar}>
                <ExpandedSideNavbar />
                <ExpandedSideNavbar title="stuff" />
            </button> */}
        </nav>
    )
};

export default SideNavbar;