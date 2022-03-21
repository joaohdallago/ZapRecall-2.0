import ReactDOM from 'react-dom';

import GlobalStyle from './theme/globalStyle';

import Home from './components/home';

function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
        </>
    )
}


const root = document.querySelector('.root');

ReactDOM.render(<App />, root);