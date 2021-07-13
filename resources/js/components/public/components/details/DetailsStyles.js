import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
    padding: 1rem;
    padding-top: 2rem;
    align-items: center;
    background: #e2e2f3;
    height: 100%;

    p {
        font-weight: bold;
        margin-top: 1rem
    }

    @media(max-width: 860px) {
        display: none
    }

    h3 {
        margin-top: 2rem
    }
`
export const Panel = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 1270px) {
        width: 80%
    }
`

export const ColorBtn = styled.div`
    border-radius: 50%;
    margin-bottom: .3rem;
    background: ${props => props.color};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    padding: ${props => props.active && '2px'};
    border: ${props => props.active && '2px solid white'}
`

export const EmojiBtn = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    border: ${props => props.active && '2px solid #897dce'}
`