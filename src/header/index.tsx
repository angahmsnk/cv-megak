import './header.scss'
import { CVPersonal } from '../types'
  
type Props = {
    data: CVPersonal;
}

const Header = ({ data: { name, surname } }: Props) => {
    return (
    <header className='cv-header'>
        <h1>CV { name } { surname }</h1>
    </header>)
}

export { Header }