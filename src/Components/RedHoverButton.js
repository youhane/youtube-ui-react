import react from "react";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faHome, faCompass, faVideo, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faCompass, faVideo, faBook)

const RedHoverButton = ({ icon, size, name }) => (
    <button className="hover:text-red-500 hover:bg-gray-100 p-3">
        <FontAwesomeIcon icon={icon} size={size} />
        <p>{name}</p>
    </button>
);

export default RedHoverButton;