// Components
import ExpandedSideNavbar from "./ExpandedSideNavbar"

const BigSideNavbar = () => {
    return (
        <nav className="absolute bg-white z-10 w-1/3 h-full border-r shadow">
            <ExpandedSideNavbar />
        </nav >
    )
}

export default BigSideNavbar