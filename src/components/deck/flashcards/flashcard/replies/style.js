import styled from 'styled-components';

export const StyledReplies = styled.ul `
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
        width: 55px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 10px;
        text-align: center;

        border-radius: 5px;

        color: #fff;
    }
`;

export const StyledReply = styled.li `
    background-color: ${props => props.color ==='red' && '#FF3030'};
    background-color: ${props => props.color ==='yellow' && '#FF922E'};
    background-color: ${props => props.color ==='green' && '#2FBE34'};
`