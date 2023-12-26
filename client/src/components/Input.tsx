import '../styles/Input.css'
import { InputProps } from './Interfaces'

export default function (props: InputProps) {
    return (
        <>
            <div className="Input">
                <span>{props.title} 
                
                {
                    props?.required &&
                    <span style={{display: 'inline', color: 'red'}}> *</span>
                }
                
                </span>
                <input type={props.type} />
            </div>

        </>
    )
}