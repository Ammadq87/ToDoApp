import '../styles/Today.css'
import { ItemProp, TagColor } from './Interfaces';
import Item from './Item';

export default function Today() {

    const items: ItemProp[] = [
        {title: 'Call Uber for Background Check', tags: [{tag: 'Misc', color: TagColor.red}, {tag: 'Uber', color: TagColor.blue}]},
        {title: 'Get in QLess for EECS 3482', tags: [{tag: 'School', color: TagColor.orange}]},
        {title: 'Do groceries'}
    ]

    return (
        <>
            <div className="Today">
                <div className="date-title">
                    <p className="title">Today</p>
                    <p className='date'>{getDate()}</p>
                </div>

                <button style={{fontSize: '16px', textAlign: 'left'}}>+ Add New Task</button>

                <div className="items-container">
                    {
                        items.map((item, i) => {
                            return (
                                <Item {...item} key={i}/>
                            )
                        })
                    }
                </div>


            </div>
        </>
    )
}

function getDate(): string {
    const fullDay: string= new Date().toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'});
    return fullDay
}