// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'

library.add(faUserCircle)

const ProfileHeader = ({ name }) => {
    return (
        <div className="flex bg-white p-4">
            <FontAwesomeIcon icon="user-circle" size="3x" />
            <div className="ml-2">
                <h1>{name}</h1>

                <Router>
                    <Link to="/">
                        <h1 className="text-blue-600 text-sm">Manage your Google Account</h1>
                    </Link>
                </Router>
            </div>
        </div>
    )
}

export default ProfileHeader