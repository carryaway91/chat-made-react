import React, { useState, useEffect } from 'react';
import Circle from '../../userCircle/UserCircle'
import { Container } from './FriendStyles'

const Friend = props => {
    const [friend, setFriend] = useState()
    const [name, setName] = useState()
    useEffect(() => {
        setFriend(props.friend)
        let name = props.friend.name
        let upper = name.charAt(0).toUpperCase() + name.slice(1)
        setName(upper)
    
    }, [props.friend])
    
    return (
        <Container onClick={() => props.start(props.friend)} active={props.activeFriend}>
            <div className="circle">
                <Circle w="3rem" name={props.friend.name} />
            </div>
            <span>{ name && name }</span>
        </Container>
    );
};



export default Friend;
