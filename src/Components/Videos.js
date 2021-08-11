import react from "react";
import Video from "./Video";

// Assets
import Thumbnail1 from '../Assets/Thumbnails/1.svg';
import Thumbnail2 from '../Assets/Thumbnails/2.svg';
import Thumbnail3 from '../Assets/Thumbnails/3.svg';
import Thumbnail4 from '../Assets/Thumbnails/4.svg';
import Thumbnail5 from '../Assets/Thumbnails/5.svg';
import Thumbnail6 from '../Assets/Thumbnails/6.svg';
import Thumbnail7 from '../Assets/Thumbnails/7.svg';
import Thumbnail8 from '../Assets/Thumbnails/8.svg';

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
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail2}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail3}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail4}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
            <Video
                thumb={Thumbnail5}
                title="This is a title"
                channel="Channel name"
                views="412K"
                duration="1:08"
                when="2 years" />
        </div>
    </div>
);

export default Videos;