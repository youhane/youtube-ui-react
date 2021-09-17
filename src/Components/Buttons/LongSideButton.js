// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faVideo, faTh, faBell, faUserCircle, faBars, faChevronRight, faSignOutAlt, faUser, faUsers, faCog, faDollarSign } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo, faTh, faBell, faUserCircle, faBars, faChevronRight, faSignOutAlt, faUser, faUsers, faCog, faDollarSign)

const LongSideButton = ({ title, icon, img, arrow }) => (
    <button className="bg-white hover:bg-gray-300 flex py-2 px-5 w-full">
        {
            icon ?
                <FontAwesomeIcon icon={icon} size="lg" />
                :
                <img src={img} alt={img} />
        }

        <p className="text-gray-800 pl-2">{title}</p>
        {arrow ? <FontAwesomeIcon icon="chevron-right" className="ml-28 my-auto" /> : <></>}
    </button>
)

export default LongSideButton;