import './details.scss'

import { CVDetails } from '../types'

type DetailsProps = {
  data: CVDetails;
}

export const Details = ({data: {experience, education}}: DetailsProps) => {
  return (
    <section className='cv-details'>
      <h2>Experience</h2>
      <ul>
          { experience.map(exp => (
          <li key={exp.year}>
            <strong>{exp.year}</strong> - { exp.description }
          </li>
          )) }
      </ul>
      <h2>Education</h2>
      <ul>
        { education.map((education, index) => <li key={index}>{education}</li>) }
      </ul>
    </section>
)
}