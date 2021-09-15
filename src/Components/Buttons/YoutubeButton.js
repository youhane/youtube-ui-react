// Components
import TransparentButton from './TransparentButton';

// Assets
import YoutubeLogo from "../../Assets/youtube-logo.png";

const YoutubeButton = (props) => (
    <div className="flex w-24" onClick={props.setShowBigNav}>
        <button>
            <TransparentButton icon="bars" size="lg" />
        </button>
        <img src={YoutubeLogo} alt='youtube-logo' className="w-24" />
    </div>
)

export default YoutubeButton;