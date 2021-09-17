// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle)

const ProfileHeader = ({ name }) => {
    return (
        <div className="flex bg-white">
            <FontAwesomeIcon icon="user-circle" size="2x" />
            <div>
                <h1>{name}</h1>
                <h1>Manage your Google Account</h1>
            </div>
        </div>
    )
}

export default ProfileHeader