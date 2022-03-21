import { BsPlay } from 'react-icons/bs'

import { StyledFlashcard } from "./style";

export default function Flashcard({ number }) {
    return (
        <StyledFlashcard>
            Pergunta {number}
            <BsPlay size='25px'/>
        </StyledFlashcard>
    )
}