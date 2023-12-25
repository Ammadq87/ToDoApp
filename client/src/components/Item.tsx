import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Item() {
    return (
        <>
        
            <div className="Item">
                <span>hello</span>
                <FontAwesomeIcon icon={faCoffee}/>
            </div>

        </>
    )
}