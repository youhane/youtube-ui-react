import react from "react";

const Video = ({ title, channel, views, duration, when }) => (
    <div className="flex flex-col">
        <img
            src="https://i.ytimg.com/vi/diR-Mg4fE-0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPcVMqtgUdlcps6G89UWMIc_WdZA"
            className="w-1/6" />
        <div>
            <div>
                <img
                    src="https://yt3.ggpht.com/ytc/AKedOLQCiv_FKTT6VBfuGXZF1FC7AUWk6S9cvRW0diw1=s68-c-k-c0x00ffffff-no-rj"
                    className="w-12 rounded-full" />
                <p>{duration}</p>
            </div>
            <div>
                <p>{title}</p>
                <p>{channel}</p>
                <p>{views} views • {when} ago</p>
            </div>
        </div>
    </div>
);

export default Video;