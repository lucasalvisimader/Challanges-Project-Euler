// css
import './MultiplesOf3Or5.css';

// react
import { useEffect, useState } from 'react';

// external
import DOMPurify from 'dompurify';
import { Challange } from '../../../components/challange/Challange';

export const MultiplesOf3Or5 = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription(DOMPurify.sanitize('If we list all the natural numbers below <b>10</b> that are multiples of <b>3</b> or <b>5</b>, we get <b>3</b>, <b>5</b>, <b>6</b> and <b>9</b>. \
            The sum of these multiples is <b>23</b>. <br/><br/> \
            Find the sum of all the multiples of 3 or 5 below 1000.'));
    }, [])

    return (<>
        <div className='multiples_of_3_or_5'>
            <Challange description={description}/>
        </div>
    </>);
}