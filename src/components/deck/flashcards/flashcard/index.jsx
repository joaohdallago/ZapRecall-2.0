import { BsPlay } from 'react-icons/bs'
import { TiArrowLoop } from 'react-icons/ti'
import { useState } from 'react';

import { StyledFlashcard } from "./style";

export default function Flashcard({ number, flashcardData, answerList, setAnswerList}) {
    const [isTurned, setIsTurned] = useState(false)

    return (
        <StyledFlashcard {...{isTurned}}>
            {
                isTurned ?
                <>
                    {flashcardData.question}
                    <TiArrowLoop size='25px' style={{
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                    }} />
                </>
                :
                <>
                    Pergunta {number}
                    <BsPlay size='25px' onClick={() => setIsTurned(true)}/>
                </>
            }
        </StyledFlashcard>
    )
}