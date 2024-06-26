// css
import './SearchResults.css';

// react
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// external
import DOMPurify from 'dompurify';

export const SearchResults = () => {

    const [challanges, setChallanges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setChallanges(
            [{
                id: 1, 
                link: 'multiples-of-3-or-5', 
                title: 'Multiples of 3 and 5', 
                description: DOMPurify.sanitize('Find the sum of all the multiples of <b>3</b> or <b>5</b> below <b>1000</b>.')
            }, {
                id: 2, 
                link: 'even-fibonacci-numbers', 
                title: 'Even Fibonacci Numbers', 
                description: DOMPurify.sanitize('Find the sum of the <b>even-valued</b> terms of Fibonacci.')
            }, {
                id: 3, 
                link: 'largest-prime-factor', 
                title: 'Largest Prime Factor', 
                description: DOMPurify.sanitize('Find the largest prime factor of the number <b>600851475143</b>.')
            }]);
    }, [navigate]);

    return (<>
        <div className='search_results'>
            <div className='search_results_challanges'>
                <span className='search_results_challanges_found' id='search_results_challanges_found_title'>Found Challanges</span>
                <div className='search_result_challanges_map'>
                    {challanges.map(challange => {
                        return (<Fragment key={challange.id}>
                            <div className='search_results_challange' key={challange.id} onClick={() => navigate(challange.link)}>
                                <span className='search_results_challange_title' id={challange.id}>{challange.title}</span>
                                <br/>
                                <span className='search_results_challange_description' id={challange.id} dangerouslySetInnerHTML={{ __html: challange.description }}></span>
                            </div>
                        </Fragment>);
                    })}
                </div>
            </div>
        </div>
    </>);
}