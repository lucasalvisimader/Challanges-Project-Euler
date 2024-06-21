// css
import './Header.css';

export const Header = () => {

    return (<>
        <div className='header'>
            <ul className='header_text_list'>
                <li id='header_text_list_home'>Home</li>
                <li id='header_text_list_search'>Search Challange</li>
                <li id='header_text_list_about'>About Me</li>
            </ul>
        </div>
    </>);
}