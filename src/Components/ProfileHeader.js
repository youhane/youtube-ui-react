const ProfileHeader = ({ name }) => {
    return (
        <div className="flex">
            <img src="#" alt="#" />
            <div>
                <h1>{name}</h1>
                <h1>Manage your Google Account</h1>
            </div>
        </div>
    )
}

export default ProfileHeader