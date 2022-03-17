import ReactDOM from 'react-dom';

import GlobalStyle from './theme/globalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            lala
        </>
    )
}


const root = document.querySelector('.root');

ReactDOM.render(<App />, root);