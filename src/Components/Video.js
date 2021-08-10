import react from "react";

const Video = ({ title, channel, views, duration, when }) => (
    <div className="flex flex-col w-1/6">
        <div className="flex">
            <img
                src="https://i.ytimg.com/vi/diR-Mg4fE-0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPcVMqtgUdlcps6G89UWMIc_WdZA"
                className="" />
            <p className="absolute bg-black text-white p-1 transform translate-x-53">{duration}</p>
        </div>
        <div className="flex">
            <div>
                <img
                    src="https://yt3.ggpht.com/ytc/AKedOLQCiv_FKTT6VBfuGXZF1FC7AUWk6S9cvRW0diw1=s68-c-k-c0x00ffffff-no-rj"
                    className="w-3/5 rounded-full mx-auto mt-1" />
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