// css
import './Challange.css';

export const Challange = ({description, code, answer}) => {

    return (<>
        <div className='challange'>
            <div className='challange_description'>
                <span dangerouslySetInnerHTML={{__html: description}}></span>
            </div>
            <div className='challange_code'>
                <span>With this statement, I did this code: </span>
                <pre>{code}</pre>
            </div>
            <div className='challange_answer'>
                <span>Applying this code, the answer is <b>{answer}</b>!</span>
            </div>
        </div>
    </>);
}