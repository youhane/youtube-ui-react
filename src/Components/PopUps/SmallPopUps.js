// Components
import LongSideButton from '../Buttons/LongSideButton'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons
import { faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faCog)

const SmallPopUps = ({ title, gear }) => {
    return (
        <div className="absolute">
            {
                title ?
                    <div className="flex">
                        <h1 className="font-bold">{title}</h1>
                        <FontAwesomeIcon icon={gear} />
                    </div>
                    :
                    <></>
            }
            <LongSideButton />
        </div>
    )
}

export default SmallPopUps