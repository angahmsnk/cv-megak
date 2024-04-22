import './details.scss'

interface Experience {
    year: number;
    description: string;
  }
  
  interface CVData {
    experience: Experience[];
    education: string[];
  }
  
  const cvData: CVData = {
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

const Details = () => {
    return (
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
    )
}

export { Details }