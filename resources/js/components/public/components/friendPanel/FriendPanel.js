import React from 'react';
import Friend from './friend/Friend';
import { Container } from './FriendPanelStyles';

const FriendPanel = props => {
    return (
        <Container>
            <ul>
                {
                    props.friends && props.friends.map((f, i) => (
                        <Friend start={props.startConversation} id={i} friend={f} activeFriend={ props.to ? props.to.id === f.id : false }/>
                    ))
                }
            </ul>
        </Container>
    );
};


export default FriendPanel;
