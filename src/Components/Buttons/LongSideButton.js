// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle, faBars)

const LongSideButton = ({ title, icon }) => (
    <button className="bg-white hover:bg-gray-400 flex">
        <FontAwesomeIcon icon={icon} />
        <p className="text-gray-300">{title}</p>
    </button>
)

export default LongSideButton;