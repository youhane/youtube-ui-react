import react from "react";
import Video from "./Video";

const Videos = ({ title }) => (
    <div className="bg-gray-100 border-none">
        <h5>{title}</h5>
        <div className="flex space-x-4 py-5 px-10">
            <Video title="This is a title" channel="Channel name" views="412K" duration="1:08" when="2 years" />
            <Video title="This is a title" channel="Channel name" views="412K" duration="1:08" when="2 years" />
            <Video title="This is a title" channel="Channel name" views="412K" duration="1:08" when="2 years" />
            <Video title="This is a title" channel="Channel name" views="412K" duration="1:08" when="2 years" />
            <Video title="This is a title" channel="Channel name" views="412K" duration="1:08" when="2 years" />
        </div>
    </div>
);

export default Videos;