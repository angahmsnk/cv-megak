import ReactDOM from 'react-dom/client'
import './style.scss'

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  surname: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://placehold.co/400x400?text=KP',
  name: 'Kamil',
  surname: 'Parylak',
  position: 'Developer',
  experience: [
    {year: 2020, description: 'Lorem Ipsum'},
    {year: 2023, description: 'Dolor Sit Amen'},
  ],
  education: [
    'Lorem ipsum',
    'Dolor Sit Amet',
    'Diable rogi są ostre'
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <main className='cv-main'>
      <header className='cv-header'>
        <h1>CV { cvData.name } { cvData.surname }</h1>
      </header>
      <aside className='cv-personal'>
        <h2>Personal Data</h2>
        <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.surname} profile photo`}/>
        <p>{ cvData.name } { cvData.surname }</p>
        <small>{ cvData.position }</small>
      </aside>
      <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          { cvData.experience.map(exp => (
            <li key={exp.year}>
              <strong>{exp.year}</strong> - { exp.description }
            </li>
          )) }
        </ul>
        <h2>Education</h2>
        <ul>
          { cvData.education.map((education, index) => <li key={index}>{education}</li>) }
        </ul>
      </section>
    </main>
  </>
)
