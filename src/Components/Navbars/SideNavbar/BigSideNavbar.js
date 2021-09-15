import LongSideButton from "../../Buttons/LongSideButton"
import YoutubeButton from "../../Buttons/YoutubeButton"
import { useTransition, animated } from 'react-spring'
import { useState } from "react"
import SmallSideNavbar from "./SmallSideNavbar"

const BigSideNavbar = ({ title }) => {
    const [showBigNav, setShowBigNav] = useState(false)
    const transitions = useTransition(showBigNav, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <nav>
            <YoutubeButton onClick={() => setShowBigNav(!showBigNav)} />
            <SmallSideNavbar />
            <div>
                <nav className="border-r-2 pr-5">
                    <YoutubeButton />
                    <LongSideButton title="Home" icon="home" />
                    <LongSideButton title="Explore" icon="compass" />
                    <LongSideButton title="Subscriptions" icon="video" />
                    <LongSideButton title="Library" icon="book" />
                    <LongSideButton title="Home" icon="home" />
                    <LongSideButton title="Explore" icon="compass" />
                    <LongSideButton title="Subscriptions" icon="video" />
                    <LongSideButton title="Library" icon="book" />
                </nav>
            </div>
            {
                transitions(({ opacity }, item) =>
                    item &&
                    <animated.div
                        className="bg-black opacity-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowBigNav(!showBigNav)}
                    >
                    </animated.div>
                )
            }

        </nav>
    )
}

export default BigSideNavbar