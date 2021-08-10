import react from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from './Button';
import TransparentButton from './TransparentButton';
import CircleButton from './CircleButton';

// Styles
import '../index.css';

// Assets
import YoutubeLogo from "../Assets/youtube-logo.png";

const TopNavbar = () => (
    <nav className="flex space-x-72 my-4">
        <img src={YoutubeLogo} alt='youtube-logo' className="w-24" />
        <div className="flex">
            <input type='search' placeholder="Search" className="border-2 p-1 pl-4 h-3/4" size="50" />
            <Button icon="search" />
            <CircleButton icon="microphone" />
        </div>
        <div className="flex">
            <TransparentButton icon="video" />
            <TransparentButton icon="th" />
            <TransparentButton icon="bell" />
            <TransparentButton icon="user-circle" size="2x" />
        </div>
        <ul>
        </ul>
    </nav >
);

export default TopNavbar;