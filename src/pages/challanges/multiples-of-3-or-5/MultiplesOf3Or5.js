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
            Find the sum of all the multiples of <b>3</b> or <b>5</b> below <b>1000</b>.'));
    }, [])

    const code = () => {
        return `
        const answer = () => {
            let sum = 0;
            for (let i = 0; i < 1000; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    sum += i;
                }
            }
            return sum;
        }`;
    }

    const answer = () => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }

    return (<>
        <div className='multiples_of_3_or_5'>
            <Challange description={description} code={code()} answer={answer()}/>
        </div>
    </>);
}