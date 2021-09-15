import { useTransition, animated } from 'react-spring'
import { useState } from "react"

// Components
import ExpandedSideNavbar from "./ExpandedSideNavbar"

const BigSideNavbar = () => {
    const [showBigNav, setShowBigNav] = useState(false)
    const transitions = useTransition(showBigNav, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <nav className="absolute bg-white z-10 w-1/3 h-full border-r shadow">
            <ExpandedSideNavbar />
            {
                transitions(({ opacity }, item) =>
                    item &&
                    <animated.div className="bg-black opacity-50 fixed top-0 left-0 w-full h-full z-50">
                        <ExpandedSideNavbar />
                    </animated.div>
                )
            }

        </nav >
    )
}

export default BigSideNavbar