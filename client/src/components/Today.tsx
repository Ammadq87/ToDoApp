import '../styles/Today.css'

export default function Today() {
    
    return (
        <>
            <div className="Today">

                <div className="date-title">
                
                    <p className="title">Today</p>
                    <p className='date'>{getDate()}</p>
                
                </div>

            </div>
        </>
    )
}

function getDate(): string {
    const fullDay: string= new Date().toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'});
    return fullDay
}