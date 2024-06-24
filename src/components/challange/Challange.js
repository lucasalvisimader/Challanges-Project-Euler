// css
import './Challange.css';

export const Challange = ({description}) => {

    return (<>
        <div className='challange'>
            <span dangerouslySetInnerHTML={{__html: description}}></span>
        </div>
    </>);
}