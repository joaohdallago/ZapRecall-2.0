import { StyledDeckFooter } from "./style";


export default function DeckFooter({ deckArray }) {
    return (
        <StyledDeckFooter>
            0/{ deckArray.length } CONCLUÍDOS
        </StyledDeckFooter>
    )
}