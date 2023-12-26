import '../styles/Links.css'
import { LinkProps } from '../components/Interfaces'

export default function (props: LinkProps) {
    return (
        <>
            <div className="Links">
                {
                    props.links.map((l, i) => {
                        return (
                            <a className='link' href={l.link} key={i}>{l.title}</a>
                        )
                    })
                }
            </div>
        </>
    )
}