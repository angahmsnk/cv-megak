import { Header } from '../header';
import { Details } from '../details';
import { Personal } from '../personal';

import './cv.scss';

const CV = () => {
    return <main className='cv-main'>
        <Header/>
        <Personal/>
        <Details/>
    </main>
}

export { CV }