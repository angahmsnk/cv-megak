import './header.scss'
import { CVPersonal } from '../types'
  
type HeaderProps = {
    data: CVPersonal;
}

export const Header = ({ data: { name, surname } }: HeaderProps) => {
    return (
    <header className='cv-header'>
        <h1>CV { name } { surname }</h1>
    </header>)
}