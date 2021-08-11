// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faMicrophone)

const CircleButton = ({ icon }) => (
    <button className="bg-gray-100 py-2 px-3 h-3/4 hover:bg-gray-200 rounded-full ml-1">
        <FontAwesomeIcon icon={icon} className="hover:text-black" color="gray" />
    </button>
);

export default CircleButton;