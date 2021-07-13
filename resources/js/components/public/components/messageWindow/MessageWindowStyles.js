import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    height: 100%;
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
    background: #d3ebf3;
    border-radius: 1rem;
    padding: .5rem 1rem;
    padding-right: 3rem;
    width: 100%;
    align-self: center
`

export const SVG = styled.svg`
    position: absolute;
    top: .9rem;
    right: 4.5rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
        cursor: pointer
    }
`