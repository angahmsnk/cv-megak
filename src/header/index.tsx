import './header.scss'
  
interface CVData {
    name: string;
    surname: string;
}

const cvData: CVData = {
    name: 'Kamil',
    surname: 'Parylak',
}

const Header = () => {
    return (
    <header className='cv-header'>
        <h1>CV { cvData.name } { cvData.surname }</h1>
    </header>)
}

export { Header }