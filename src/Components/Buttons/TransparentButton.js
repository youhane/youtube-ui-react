// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle, faBars)

const TransparentButton = ({ icon, size, toggleSubMenu }) => (
    <button className="py-2 px-5 h-3/4" onClick={toggleSubMenu}>
        <FontAwesomeIcon icon={icon} size={size} />
    </button>
);

export default TransparentButton;