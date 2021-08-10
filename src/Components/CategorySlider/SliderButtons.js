import react from "react";

const SliderButtons = ({ text }) => (
    <button className="bg-gray-300 p-1 px-3 rounded-full mr-2 hover:bg-gray-600 hover:text-white">
        {text}
    </button>
);

export default SliderButtons;