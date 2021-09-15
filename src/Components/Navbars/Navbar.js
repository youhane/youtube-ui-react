// Components
import TopNavbar from "./TopNavbar/TopNavbar"
import BigSideNavbar from "./SideNavbar/BigSideNavbar"

// Packages
import { useState } from "react"
import { useTransition, animated } from 'react-spring'

const Navbar = () => {
    const [showBigNav, setShowBigNav] = useState(false)
    const transitions = useTransition(showBigNav, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <>
            {showBigNav ? <>
                <TopNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
                <BigSideNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
            </>
                :
                <TopNavbar toggleMenu={() => setShowBigNav(!showBigNav)} />
            }
            {
                transitions(
                    (styles, item) => item && <animated.div style={styles}><BigSideNavbar toggleMenu={() => setShowBigNav(!showBigNav)} /></animated.div>
                )
            }
        </>
    )
}

export default Navbar