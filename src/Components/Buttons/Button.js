// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faMicrophone)

const Button = ({ icon }) => (
    <button className="bg-gray-300 py-2 px-5 h-3/4 hover:bg-gray-400">
        <FontAwesomeIcon icon={icon} className="hover:text-black" color="gray" />
    </button>
);

export default Button;