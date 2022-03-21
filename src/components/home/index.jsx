import Logo from "../logo"

import { StyledHome } from './style'

export default function Home({ setPage }) {
    return (
        <StyledHome>
            <Logo/>
            <button onClick={() => setPage('deck')}>Iniciar Recall!</button>
        </StyledHome>
    )
}