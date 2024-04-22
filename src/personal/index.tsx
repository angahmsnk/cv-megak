import './personal.scss'
  
interface CVData {
    photo: string;
    name: string;
    surname: string;
    position: string;
}
  
const cvData: CVData = {
    photo: 'https://placehold.co/400x400?text=KP',
    name: 'Kamil',
    surname: 'Parylak',
    position: 'Developer'
}

const Personal = () => {
    return (
        <aside className='cv-personal'>
            <h2>Personal Data</h2>
            <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.surname} profile photo`}/>
            <p>{ cvData.name } { cvData.surname }</p>
            <small>{ cvData.position }</small>
        </aside>
    )
}

export { Personal }