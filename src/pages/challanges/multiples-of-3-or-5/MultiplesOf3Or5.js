// css
import { useEffect, useState } from 'react';
import './MultiplesOf3Or5.css';

export const MultiplesOf3Or5 = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription('If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.<br/><br/>Find the sum of all the multiples of 3 or 5 below 1000.');
    }, [])

    return (<>
        <span dangerouslySetInnerHTML={{__html: description}}></span>
    </>);
}