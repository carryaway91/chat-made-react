import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    align-items:center;
    border-radius: .5rem;
    background: ${props => props.active ? '#d89fdc' : 'transparent'};

    &:hover {
        background: ${props => props.active ? '#d89fdc' : '#f1d7f3'};
        cursor: pointer
    }
`