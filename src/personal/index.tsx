import './personal.scss'
import { CVPersonal } from '../types'

type Props = {
    data: CVPersonal;
}

const Personal = ({data: {photo, name, surname, position}}: Props) => {
    return (
        <aside className='cv-personal'>
            <h2>Personal Data</h2>
            <img className='cv-photo' src={photo} alt={`${name} ${surname} profile photo`}/>
            <p>{ name } { surname }</p>
            <small>{ position }</small>
        </aside>
    )
}

export { Personal }