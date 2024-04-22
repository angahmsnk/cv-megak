import { Header } from '../header';
import { Details } from '../details';
import { Personal } from '../personal';

import './cv.scss';

import { CVData } from '../types'

const CV = () => {
      
    const cvData: CVData = {
        personal: {
            photo: 'https://placehold.co/400x400?text=KP',
            name: 'Kamil',
            surname: 'Parylak',
            position: 'Developer'
        },
        details: {
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
    }

    return <main className='cv-main'>
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}

export { CV }