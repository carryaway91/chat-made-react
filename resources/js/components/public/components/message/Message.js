import React from 'react';
import UserCircle from '../userCircle/UserCircle';
import { MsgContainer, UserWrap } from './MessageStyles';
import moment from 'moment';

const Message = props => {
    return (
        <div style={{ display: 'flex', marginBottom: '.5rem'}}>
            { props.user != props.message.sender_id && (
                    <UserCircle name={props.from && props.from} w="2rem" />
                )    
            }
            
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '.5rem'}}>
                <MsgContainer sender={props.user == props.message.sender_id} color={props.chatColor}>
                    { props.message && props.message.text }
                    <span className="time">{ moment(props.message.created_at).format('LT')}</span>
                </MsgContainer>
            </div>
        </div>
    );
};



export default Message;
