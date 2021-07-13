import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center
`

export const Form = styled.form`
    width: 340px;
    background: #bcc9f9;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media(max-width: 350px) {
        width: 260px
    }
    .input {
        border: none;
        border-bottom: 1px solid navyblue;
        background: #e7e7ff;
        margin-bottom: 1rem;
        outline: none;
        padding: .5rem 1rem
    }

    input {
        border: none;
        background: #9191e8;
        border: none;
        padding: .5rem 0
    }
`