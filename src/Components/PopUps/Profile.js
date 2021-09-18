// Components
import ProfileHeader from "../ProfileHeader"
import LongSideButton from "../Buttons/LongSideButton"

const Profile = () => {
    return (
        <div className="absolute top-12 right-7 border-2 bg-white z-10 w-72">
            <div className="border-b-2">
                <ProfileHeader name="Jason Sebastian" />
                <LongSideButton title="Your channel" icon="user" />
                <LongSideButton title="Purchases and memberships" icon="dollar-sign" />
                <LongSideButton title="YouTube Studio" icon="cog" />
                <LongSideButton title="Switch acc" icon="users" arrow="true" />
                <LongSideButton title="Sign out" icon="sign-out-alt" />
            </div>
            <div className="border-b-2">
                <LongSideButton title="Appearance" icon="user" arrow="true" />
                <LongSideButton title="Language" icon="dollar-sign" arrow="true" />
                <LongSideButton title="Location" icon="cog" arrow="true" />
                <LongSideButton title="Settings" icon="users" />
                <LongSideButton title="Your data" icon="sign-out-alt" />
            </div>
            <div className="border-b-2">
                <LongSideButton title="Appearance" icon="user" arrow="true" />
                <LongSideButton title="Language" icon="dollar-sign" arrow="true" />
                <LongSideButton title="Location" icon="cog" arrow="true" />
                <LongSideButton title="Settings" icon="users" />
                <LongSideButton title="Your data" icon="sign-out-alt" />
            </div>
        </div>
    )
}

export default Profile