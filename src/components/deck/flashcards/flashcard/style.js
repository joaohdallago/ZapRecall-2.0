import styled from 'styled-components';

export const StyledFlashcard = styled.li `
    position: relative;

    width: 182px;
    min-height: ${props => props.isTurned ? '80px' : '40px'};

    display: flex;
    flex-direction: ${props => props.isTurned ? 'column' : 'row'};
    justify-content: space-between;
    align-items: ${props => props.isTurned ? 'flex-start' : 'center'};


    padding: 5px;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-weight: ${props => props.isTurned ? 'normal' : 'bold'};

    color: #333;
    background-color: #fff;
`