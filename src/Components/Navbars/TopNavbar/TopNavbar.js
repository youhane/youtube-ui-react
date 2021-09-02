// Components
import Button from '../../Buttons/Button';
import TransparentButton from '../../Buttons/TransparentButton';
import CircleButton from '../../Buttons/CircleButton';
import YoutubeButton from '../../Buttons/YoutubeButton';

const TopNavbar = () => (
    <nav className="flex justify-between my-2">
        <YoutubeButton />
        <div className="flex mx-auto">
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