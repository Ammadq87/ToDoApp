import '../styles/Input.css'

interface InputProps {
    title: string;
    type: string;
    required: boolean;
}

export default function ({title, type, required}: InputProps) {
    return (
        <>
            <div className="Input">
                <span>{title} 
                
                {
                    required &&
                    <span style={{display: 'inline', color: 'red'}}> *</span>
                }
                
                </span>
                <input type={type} />
            </div>

        </>
    )
}