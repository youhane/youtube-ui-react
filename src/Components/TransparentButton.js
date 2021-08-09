import react from "react";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle)

const TransparentButton = ({ icon }) => (
    <button className="py-2 px-5 h-3/4">
        <FontAwesomeIcon icon={icon} />
    </button>
);

export default TransparentButton;