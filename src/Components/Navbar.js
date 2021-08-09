import react from 'react';

// Styles
import '../index.css';

// Assets
import YoutubeLogo from "../Assets/youtube-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav>
            <img src={YoutubeLogo} alt='youtube-logo' className="w-24" />
            <div>
                <input type='search' placeholder="Search" className="border-2 p-1 pl-4" size="40" />
            </div>
            <ul>
                <FontAwesomeIcon icon="check-square" />
                Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
            </ul>
        </nav>
    )
};

export default Navbar;