// Components
import TransparentButton from "../Buttons/TransparentButton"

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faBell)

const Notif = () => {
    return (
        <div className="absolute top-12 right-5 bg-white p-2 px-4 h-96 z-10">
            <div className="flex">
                <h1 className="my-auto mr-32">Notification</h1>
                <TransparentButton icon="cog" size="lg" />
            </div>
            <div>
                <FontAwesomeIcon icon="bell" />
                <h1>Your notifications live here</h1>
                <p>
                    Subscribe to your favorite channels to get notified about their latest videos.
                </p>
            </div>
        </div>
    )
}

export default Notif