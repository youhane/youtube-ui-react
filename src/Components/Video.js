// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faClock, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faClock, faList)

const Video = ({ thumb, logo, title, channel, views, duration, when }) => (
    <div className="flex flex-col w-1/6 cursor-pointer">
        <div className="flex">
            <img src={thumb} alt={thumb} />
            <p className="absolute bg-black text-white p-1 transform translate-x-53 translate-y-28 text-xs">{duration}</p>
            <div className="absolute text-white flex flex-col space-y-1 transform translate-x-56 translate-y-2">
                <FontAwesomeIcon icon="clock" className="bg-black p-1 text-2xl" />
                <FontAwesomeIcon icon="list" className="bg-black p-1 text-2xl" />
            </div>
        </div>
        <div className="flex mt-1">
            <div>
                <img src={logo} className="w-3/5 rounded-full mx-auto mt-1" alt={logo} />
            </div>
            <div className="text-left">
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-gray-500">{channel}</p>
                <p className="text-sm text-gray-500">{views} views • {when} ago</p>
            </div>
        </div>
    </div>
);

export default Video;