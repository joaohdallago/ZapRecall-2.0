import { StyledReplies, StyledReply } from "./style";

export default function Replies({ answerList, setAnswerList, setIsAnswered, setIsTurned }) {
    console.log('?')
    console.log(answerList);
    function chooseReply(color) {
        setAnswerList([...answerList, color]);
        setIsTurned(false);
        setIsAnswered(color);
        
    }

    return (
        <StyledReplies>
            <StyledReply color="red" onClick={() => chooseReply('red')}>Não lembrei</StyledReply>
            <StyledReply color="yellow" onClick={() => chooseReply('yellow')}>Quase não lembrei</StyledReply>
            <StyledReply color="green" onClick={() => chooseReply('green')}>Zap!</StyledReply>
        </StyledReplies>
    )
}

