import { BsPlay, BsQuestionCircleFill } from 'react-icons/bs'
import { TiArrowLoop } from 'react-icons/ti'
import { MdCancel, MdCheckCircle } from 'react-icons/md'

import { useState } from 'react';

import { StyledFlashcard } from "./style";

import Replies from './replies';

export default function Flashcard({ number, flashcardData, answerList, setAnswerList}) {
    const [isTurned, setIsTurned] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnswered, setIsAnswered] = useState(false)

    return (
        <StyledFlashcard {...{isTurned}}>
            {
                isTurned ?
                <>
                    {
                        isFlipped ?
                        <>
                            {flashcardData.answer}
                            <Replies {...{answerList, setAnswerList, setIsAnswered, setIsTurned}}/>
                        </>
                        :
                        <>
                        {flashcardData.question}
                        <TiArrowLoop size='25px' style={{
                            position: 'absolute',
                            bottom: '5px',
                            right: '5px',
                        }} onClick={() => setIsFlipped(true)}/>
                        </>

                    }
                </>
                :
                <>
                    {
                        isAnswered ?
                            <>
                            {isAnswered === 'red' && (
                                <>
                                    Pergunta {number}
                                    <MdCancel size='25px' color='#FF3030'/>
                                </>
                            )}

                            {isAnswered === 'yellow' && (
                                <>
                                    Pergunta {number}
                                    <BsQuestionCircleFill size='25px' color='#FF922E'/>
                                </>
                            )}

                            {isAnswered === 'green' && (
                                <>
                                    Pergunta {number}
                                    <MdCheckCircle size='25px' color='#2FBE34'/>
                                </>
                            )}
                            </>
                        :
                        <>
                            Pergunta {number}
                            <BsPlay size='25px' onClick={() => setIsTurned(true)}/>
                        </>
                    }
                    
                </>
            }
        </StyledFlashcard>
    )
}