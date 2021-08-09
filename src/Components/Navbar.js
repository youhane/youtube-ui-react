import react from 'react';

// Styles
import '../index.css';

// Assets
import YoutubeLogo from "../Assets/youtube-logo.png";

const Navbar = () => {
    return (
        <nav>
            <img src={YoutubeLogo} alt='youtube-logo' className="w-24" />
            <ul>
                <input type='search' placeholder="Search" />
            </ul>
        </nav>
    )
};

export default Navbar;