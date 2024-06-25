// css
import './index.css';

// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// pages
import { Main } from './pages/main/Main';
import { SearchResults } from './pages/search_results/SearchResults';
import { MultiplesOf3Or5 } from './pages/challanges/multiples-of-3-or-5/MultiplesOf3Or5';
import { EvenFibonacciNumbers } from './pages/challanges/even-fibonacci-numbers/EvenFibonacciNumbers';

// components
import { Header } from './components/header/Header';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/search-results',
        element: <SearchResults />
    },
    {
        path: 'search-results/multiples-of-3-or-5',
        element: <MultiplesOf3Or5 />
    },
    {
        path: 'search-results/even-fibonacci-numbers',
        element: <EvenFibonacciNumbers />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
