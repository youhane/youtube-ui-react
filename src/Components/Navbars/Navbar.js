// Components
import TopNavbar from "./TopNavbar/TopNavbar"
import BigSideNavbar from "./SideNavbar/BigSideNavbar"
import { useState } from "react"

const Navbar = () => {
    const [showBigNav, setShowBigNav] = useState(false)

    return (
        <>
            {showBigNav ? <>
                <TopNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
                <BigSideNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
            </>
                :
                <TopNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
            }
        </>
    )
}

export default Navbar