// Components
import ProfileHeader from "../ProfileHeader"
import LongSideButton from "../Buttons/LongSideButton"

const Profile = () => {
    return (
        <div className="absolute top-12 right-7 border-2 bg-white z-10 w-72">
            <ProfileHeader name="Jason Sebastian" />
            <LongSideButton title="Your channel" icon="user" />
            <LongSideButton title="Purchases and memberships" icon="dollar-sign" />
            <LongSideButton title="YouTube Studio" icon="cog" />
            <LongSideButton title="Switch account" icon="users" arrow="true" />
            <LongSideButton title="Sign out" icon="sign-out-alt" />
            <hr></hr>
        </div>
    )
}

export default Profile