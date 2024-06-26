// css
import './LargestPrimeFactor.css';

// react
import { useEffect, useState } from 'react';

// component
import { Challange } from '../../../components/challange/Challange';

// external
import DOMPurify from 'dompurify';

export const LargestPrimeFactor = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription(DOMPurify.sanitize('The prime factors of 13195 are <b>5, 7, 13</b> and <b>29</b>.<br/><br/>What is the largest prime factor of the number <b>600851475143</b>?'));
    }, [])

    const code = () => {
        return `const answer = ${answer.toString()}`;
    }

    const answer = () => {
        let values = [1, 2];
        let sum = 2;
        let i = values[values.length - 1] + values[values.length - 2];
        
        while (i < 4000000) {
            let newValue = values[values.length - 1] + values[values.length - 2];
            values.push(newValue)
            if (values[values.length - 1] % 2 === 0) {
                sum += values[values.length - 1];
            }
            i = newValue;
        }

        return sum;
    }

    return (<>
        <div className='largest_prime_factor'>
            <Challange description={description} code={code()} answer={answer()}/>
        </div>
    </>);
}