/* eslint-disable react-refresh/only-export-components */
import { Header } from '../header';
import { Details } from '../details';
import { Personal } from '../personal';

// styles
import './cv.scss';

// importing data
import { cvData } from './cvData'

export const CV = () => {

    const {details, personal} = cvData;

    return <main className='cv-main'>
        <Header data={personal}/>
        <Personal data={personal}/>
        <Details data={details}/>
    </main>
}