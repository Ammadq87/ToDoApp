import '../styles/Links.css'

interface Link {
    title: string;
    link: string;
}

interface InputProps {
    links: Link[];
}

export default function ({links}: InputProps) {
    return (
        <>
            <div className="Links">
                {
                    links.map((l, i) => {
                        return (
                            <a className='link' href={l.link} key={i}>{l.title}</a>
                        )
                    })
                }
            </div>
        </>
    )
}