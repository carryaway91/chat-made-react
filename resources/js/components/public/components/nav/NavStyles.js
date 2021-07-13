import styled from "styled-components";

export const Container = styled.nav`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    width: 100%
    border-bottom: 1px solid lightgray;
    box-shadow: 0 2px 5px 0 lightblue;
    background: #bcc9f9;

    .innerWrap {
        display: flex;
    }

    .logout {
        background: #897dce;
        border: none;
        border-radius: 1rem;
        padding: 0 1rem;
        color: white;
        transition: all .1s ease-in-out;
        margin-left: 1rem;

        &:hover {
            background: #a69ed6;
        }

        @media(max-width: 400px) {
            padding: 0 .5rem
        }
    }

    .colors, .emojies {
        position: relative;
        align-items: center;
        display: none;
        margin: 0 .5rem;
        
        @media(max-width: 860px) {
            display: flex
        }
    }

    .panel1 {
        right: -8rem;

        @media(max-width: 400px) {
            right: -11.5rem;
        }
    }
    
    .panel {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -2.5rem;
        padding: .5rem;
        border-radius: .5rem;
        box-shadow: 0 3px 3px 0 #a69ed6;
        background: white;
    }

    .panel2 {
        right: -2rem;

        span {
            margin: 0 .5rem;
            font-size: 1.25rem
        }

        @media(max-width: 380px) {
            right: -7rem
        }
    }
    `
    
    export const Color = styled.span`
        background: ${props => props.c && props.c};
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: 0 .5rem; 
        border: ${props => props.active && '2px solid #897dce'};
        cursor: pointer
    `

    export const Emoji = styled.span`
        border: ${props => props.active && '2px solid #897dce'};
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `
    
    export const Logo = styled.h1`
    font-family: 'Festive', cursive;
    margin-left: .8rem;
    @media(max-width: 400px) {
        display: none
    }
    `
    export const NavLogo = styled.h1`
    font-family: 'Festive', cursive;
    display: none;

    @media(max-width: 400px) {
        display: inline-block
    }
    `
    
    export const User = styled.p`
    align-self: center;
    margin: 0;
    margin-right: 1rem;
    font-weight: bold;

    @media(max-width: 860px) {
        display: none
    }
`

export const Btn = styled.button`
    background: #897dce;
    border: none;
    border-radius: 1rem;
    padding: .2rem .5rem;
    align-self: center;

    &:hover {
        background: #a69ed6;
    }

`