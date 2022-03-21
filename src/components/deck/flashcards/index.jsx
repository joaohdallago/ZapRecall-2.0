import { StyledFlashcards } from "./style";

import Flashcard from "./flashcard";

export default function Flashcards({ deckArray, answerList, setAnswerList }) {
    

    return (
        <StyledFlashcards>
            {deckArray.map((flashcardData, index) => <Flashcard key={index} number={index + 1} {...{flashcardData, answerList, setAnswerList}}/>)}
        </StyledFlashcards>
    )
}