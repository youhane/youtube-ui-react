// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faBell)

const Notif = () => {
    return (
        <div className="absolute top-12 right-5 bg-white py-2 h-96 z-10 border">
            <div className="flex border-b-2">
                <h1 className="my-auto py-2 px-4">Notification</h1>
                <FontAwesomeIcon icon="cog" size="lg" className="my-auto ml-96" />
            </div>
            <div className="text-center my-20">
                <FontAwesomeIcon icon="bell" size="5x" className="mx-auto" />
                <h1 className="font-bold mt-4">Your notifications live here</h1>
                <p className="w-3/5 mx-auto mt-2">
                    Subscribe to your favorite channels to get notified about their latest videos.
                </p>
            </div>
        </div>
    )
}

export default Notif