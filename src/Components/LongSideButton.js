// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle, faBars)

const LongSideButton = ({ title, icon }) => {
    <button>
        <FontAwesomeIcon icon={icon} />
        <p>{title}</p>
    </button>
}

export default LongSideButton;