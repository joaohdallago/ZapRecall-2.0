import ReactDOM from 'react-dom';
import { useState } from 'react';

import GlobalStyle from './theme/globalStyle';

import Home from './components/home';
import Deck from './components/deck';

function App() {
    const [page, setPage] = useState('home')

    return (
        <>
            <GlobalStyle />
            {page === 'home' && <Home setPage={setPage}/>}
            {page === 'deck' && <Deck setPage={setPage}/>}
        </>
    )
}


const root = document.querySelector('.root');

ReactDOM.render(<App />, root);