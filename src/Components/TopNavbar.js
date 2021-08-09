import react from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from './Button';
import TransparentButton from './TransparentButton';

// Styles
import '../index.css';

// Assets
import YoutubeLogo from "../Assets/youtube-logo.png";

const TopNavbar = () => (
    <nav className="flex">
        <img src={YoutubeLogo} alt='youtube-logo' className="w-24" />
        <div className="flex">
            <input type='search' placeholder="Search" className="border-2 p-1 pl-4 h-3/4" size="40" />
            <Button icon="search" />
            <Button icon="microphone" />
        </div>
        <div className="flex">
            <TransparentButton icon="video" />
            <TransparentButton icon="th" />
            <TransparentButton icon="bell" />
            <TransparentButton icon="user-circle" />
        </div>
        <ul>
        </ul>
    </nav >
);

export default TopNavbar;