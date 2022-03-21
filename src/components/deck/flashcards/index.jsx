import { StyledFlashcards } from "./style";

import Flashcard from "./flashcard";

export default function Flashcards({ deckArray }) {
    

    return (
        <StyledFlashcards>
            {deckArray.map((flashcard, index) => <Flashcard key={index} number={index + 1}/>)}
        </StyledFlashcards>
    )
}