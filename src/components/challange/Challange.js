// css
import './Challange.css';

// react
import { useEffect } from 'react';

// external
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export const Challange = ({description, code, answer}) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (<>
        <div className='challange'>
            <div className='challange_description'>
                <span dangerouslySetInnerHTML={{__html: description}}></span>
            </div>
            <div className='challange_code_container'>
                <span>With this statement, I did this code: </span>
                <pre className='challange_code'>
                    <code className='lang-javascript'>{code}</code>
                </pre>
            </div>
            <div className='challange_answer'>
                <span>Applying this code, I got the answer <b>{answer}</b>!</span>
            </div>
        </div>
    </>);
}