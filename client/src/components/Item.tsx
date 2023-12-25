import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {ItemProp} from './Interfaces'

export default function Item(props: ItemProp) {
    return (
        <>
        
            <div className="Item">
                <input type="checkbox" />

                <FontAwesomeIcon icon={faChevronRight}/>
            </div>

        </>
    )
}