import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {ItemProp} from './Interfaces'
import '../styles/Item.css'

export default function Item(props: ItemProp) {
    
    const isBasic: boolean = props.tags === null || props.dueDate === null;

    return (
        <>
            <div className="Item">
                <div className="itemHeader">
                    <input type="checkbox" className='checkbox' />
                    <p className='title'>{props.title}</p>
                    <button className='expand-task-btn'>
                        <FontAwesomeIcon className='expand-icon' icon={faChevronRight}/>
                    </button>
                </div>

                {

                    !isBasic &&
                    <div className="itemInfo">
                        
                        {
                            props.dueDate &&
                            <div className="dueDate"></div>
                        }

                        {
                            props.tags &&
                            <div className="tags">
                                {
                                    props.tags?.map((tag, i) => {
                                        return (
                                            <a href="" key={i} style={{backgroundColor: tag.color}}>{'#' + tag.tag}</a>
                                        )
                                    })
                                }
                            </div>
                        }

                    </div>
                }
            </div>

        </>
    )
}