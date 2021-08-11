import Video from "./Video";

// Assets
import Thumbnail1 from '../Assets/Thumbnails/1.svg';
import Thumbnail2 from '../Assets/Thumbnails/2.svg';
import Thumbnail3 from '../Assets/Thumbnails/3.svg';
import Thumbnail4 from '../Assets/Thumbnails/4.svg';
import Thumbnail5 from '../Assets/Thumbnails/5.svg';

import Logo1 from '../Assets/Logo/1.svg';
import Logo2 from '../Assets/Logo/2.svg';
import Logo3 from '../Assets/Logo/3.svg';
import Logo4 from '../Assets/Logo/4.svg';
import Logo5 from '../Assets/Logo/5.svg';

const Videos = ({ title }) => (
    <div className="bg-gray-100 border-none">
        {title ? (
            <div>
                <hr className="border-2 bg-gray-200 w-full mx-2" />
                <h1 className="text-left ml-10 text-xl font-bold mt-3">{title}</h1>
            </div>
        ) : (
            null
        )}
        <div className="flex space-x-4 py-5 px-10">
            <Video
                thumb={Thumbnail1}
                logo={Logo1}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail2}
                logo={Logo2}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail3}
                logo={Logo3}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail4}
                logo={Logo4}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail5}
                logo={Logo5}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
        </div>
    </div>
);

export default Videos;