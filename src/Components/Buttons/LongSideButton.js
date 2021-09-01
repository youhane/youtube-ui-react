// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle, faBars)

const LongSideButton = ({ title, icon }) => (
    <button className="bg-white hover:bg-gray-400 flex py-2 px-5">
        <FontAwesomeIcon icon={icon} size="lg" />
        <p className="text-gray-500 pl-2">{title}</p>
    </button>
)

export default LongSideButton;