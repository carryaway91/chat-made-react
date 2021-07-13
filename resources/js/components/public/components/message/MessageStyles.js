import styled from "styled-components";

export const MsgContainer = styled.div`
    display: inline-block;
    max-width: 80%;
    word-break:break-word;
    padding: .4rem 1rem;
    border-radius: 1rem;
    background-color: ${props => props.sender ? props.color : 'gray'};
    color: white;
    align-self: ${props => props.sender ? 'flex-end' : 'flex-start'};
    box-shadow: 0 2px 2px 1px lightgray;

    .time {
        color: lightgray;
        font-size: .7rem;
        margin-left: .5rem;
        font-weight: bold
    }
`

export const UserWrap = styled.div`
    align-self: flex-end;
    margin-right: .5rem;
`