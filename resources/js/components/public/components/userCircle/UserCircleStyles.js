import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: ${props => props.w && props.w};
    height: ${props => props.w && props.w};
    background: lightblue;
    font-weight: bold;
`