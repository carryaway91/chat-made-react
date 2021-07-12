import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    overflow-y: scroll;
    padding: 0 .5rem
`

export const Emoji = styled.span`
    font-size: 2rem;
    margin: 0 .5rem;

    &:hover {
        cursor: pointer
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background: lightblue;
    border-radius: 1rem;
    padding: .5rem 1rem;
    width: 100%;
    align-self: center
`

export const SVG = styled.svg`
    position: absolute;
    top: .9rem;
    right: 4rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
        cursor: pointer
    }
`