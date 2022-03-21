import { StyledDeckFooter } from "./style";

import { BsQuestionCircleFill } from 'react-icons/bs'
import { MdCancel, MdCheckCircle } from 'react-icons/md'


export default function DeckFooter({ deckArray, answerList }) {
    return (
        <StyledDeckFooter>
            {answerList.length}/{deckArray.length} CONCLUÍDOS

        </StyledDeckFooter>
    )
}