import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    align-items:center;
    border-radius: .5rem;
    background: ${props => props.active ? '#897dce' : 'transparent'};

    &:hover {
        background: ${props => props.active ? '#897dce' : '#c1b9ef'};
        cursor: pointer
    }

    span {
        margin-left: 1rem;
        font-weight: bold;

        @media(max-width: 790px) {
            display: none
        }
    }

    @media(max-width: 400px) {
        padding: .5rem
    }
    .circle {
        @media(max-width: 790px) {
            display: flex;
            width: 100%;
            justify-content: center
        }
    }
`