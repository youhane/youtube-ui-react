import LongSideButton from "../Buttons/LongSideButton"

const Grid = () => {
    return (
        <div className="absolute bg-white top-12">
            <LongSideButton title="Upload video" icon="play" />
            <LongSideButton title="Go live" icon="life-ring" />
            <LongSideButton title="Upload video" icon="play" />
            <LongSideButton title="Go live" icon="life-ring" />
        </div>
    )
}

export default Grid