// Components
import ProfileHeader from "../ProfileHeader"
import LongSideButton from "../Buttons/LongSideButton"

const Profile = () => {
    return (
        <div className="absolute top-12 border-2 bg-white p-4 z-10">
            <ProfileHeader />
            <LongSideButton />
            <LongSideButton />
            <LongSideButton />
            <LongSideButton />
            <LongSideButton />
        </div>
    )
}

export default Profile