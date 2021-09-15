// Components
import SmallSideNavbar from "./SmallSideNavbar"
import ExpandedSideNavbar from "./ExpandedSideNavbar";
import { useState } from "react";


const SideNavbar = () => {
    const [showBigNav, setShowBigNav] = useState(false)
    return (
        <>
            {
                showBigNav ?
                    <nav>
                        <div id="bigNav" onClick={() => setShowBigNav(!showBigNav)}>
                            <ExpandedSideNavbar />
                            <ExpandedSideNavbar title="stuff" />
                        </div>
                    </nav>
                    : <SmallSideNavbar onClick={() => setShowBigNav(!showBigNav)} />
            }

        </>
    )
};

export default SideNavbar;