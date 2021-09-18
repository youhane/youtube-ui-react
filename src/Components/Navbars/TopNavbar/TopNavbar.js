// Components
import Button from '../../Buttons/Button';
import TransparentButton from '../../Buttons/TransparentButton';
import CircleButton from '../../Buttons/CircleButton';
import YoutubeButton from '../../Buttons/YoutubeButton';
import Profile from '../../PopUps/Profile';
import Video from '../../PopUps/Video';
import Notif from '../../PopUps/Notif';
import Grid from '../../PopUps/Grid';

// Packages
import { useState } from "react"

const TopNavbar = (props) => {
    const [showProfile, setShowProfile] = useState(true)
    const [showNotif, setShowNotif] = useState(true)
    const [showVideo, setShowVideo] = useState(true)
    const [showGrid, setShowGrid] = useState(true)
    return (
        <nav className="flex justify-between my-2">
            <YoutubeButton toggleMenu={props.toggleMenu} />
            <div className="flex mx-auto">
                <input type='search' placeholder="Search" className="border-2 p-1 pl-4 h-3/4" size="50" />
                <Button icon="search" />
                <CircleButton icon="microphone" />
            </div>
            <div className="flex">
                <TransparentButton icon="video" toggleSubMenu={() => setShowVideo(!showVideo)} />
                {
                    showVideo ? <Video title="Videos" /> : <></>
                }

                <TransparentButton icon="th" toggleSubMenu={() => setShowGrid(!showGrid)} />
                {
                    showGrid ? <Grid title="Grid" /> : <></>
                }

                <TransparentButton icon="bell" toggleSubMenu={() => setShowNotif(!showNotif)} />
                {
                    showNotif ? <Notif title="Notifs" /> : <></>
                }

                <TransparentButton icon="user-circle" size="2x" toggleSubMenu={() => setShowProfile(!showProfile)} />
                {
                    showProfile ? <Profile /> : <></>
                }
            </div>
        </nav >
    )
};

export default TopNavbar;