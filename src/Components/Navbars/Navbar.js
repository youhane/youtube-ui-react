// Components
import TopNavbar from "./TopNavbar/TopNavbar"
import BigSideNavbar from "./SideNavbar/BigSideNavbar"
import { useState } from "react"

const Navbar = () => {
    const [showBigNav, setShowBigNav] = useState(false)

    return (
        <>
            {showBigNav ? <>
                <TopNavbar toggleMenu={() => setShowBigNav(true)} showLogo={showBigNav} />
                <BigSideNavbar toggleMenu={() => setShowBigNav(false)} />
            </>
                :
                <TopNavbar toggleMenu={() => setShowBigNav(true)} />
            }
        </>
    )
}

export default Navbar