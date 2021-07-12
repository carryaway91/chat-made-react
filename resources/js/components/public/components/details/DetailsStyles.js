import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-left: 1px solid black;
    padding: 1rem;
    align-items: center;
    background: #7575bb;
`

export const ColorBtn = styled.div`
    border-radius: 50%;
    background: ${props => props.color};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    border: ${props => props.active && '2px solid purple'}
    `