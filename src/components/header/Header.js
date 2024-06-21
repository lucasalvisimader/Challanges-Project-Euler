// css
import './Header.css';

// images
import configuration_icon from '../../assets/images/configuration_icon.png';

export const Header = () => {

    return (<>
        <div className='header'>
            <ul className='header_text_list'>
                <li id='header_text_list_home'>
                    <a href='/'>Home</a>
                </li>
                <li id='header_text_list_search'>
                    <a href='/search-results'>Search Challange</a>
                </li>
                <li id='header_text_list_about'>About Me</li>
                <li id='header_text_list_resume'>Resume</li>
                <li id='header_text_list_configuration'>
                    <img id='header_text_list_configuration_icon' src={configuration_icon}/>
                </li>
            </ul>
        </div>
    </>);
}