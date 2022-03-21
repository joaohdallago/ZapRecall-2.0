import Logo from "../logo"

import { HomeStyle } from './style'

export default function Home() {
    return (
        <HomeStyle>
            <Logo/>
            <button>Iniciar Recall!</button>
        </HomeStyle>
    )
}