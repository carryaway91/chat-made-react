import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Message from '../message/Message'
import EmojiPanel from '../emojiPanel/EmojiPanel';
import { Container, Emoji, Input, SVG } from './MessageWindowStyles';

const MessageWindow = props => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [showEmojiPanel, setShowEmojiPanel] = useState(false)


    useEffect(() =>{
        window.addEventListener('click', () => {
            setShowEmojiPanel(false)
        })
    })

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // connect / disconnect 
    useEffect(() => {
        if(props.data != null) {
            connect()
        } else {
            setMessages([])
        }

        return () => {
            if(props.data != null) {
                disconnect()
            }
        }
    }, [props.data])
    
    const scrollToBottom = () => {
        let window = document.getElementById('window')
        window.scrollTop = window.scrollHeight

    }

    const connect = () => {
        if(props.data) {
            setMessages(props.data.messages)
            scrollToBottom()
            window.Echo.private('chat.' + props.data.id).listen('.message.new', e => {
                setMessages(prev => {
                    return [
                        ...prev,
                        e.message
                    ]
                })
            })
        }
    }

    const disconnect = () => {
        if (props.data.id)
            window.Echo.leave('chat.' + props.data.id)
    }

    const handleCreateConversation = e => {
        if(e.key === 'Enter' && text != '') {
            if(props.data === null) {
                
                const conversationData = new FormData
                conversationData.append('sender_id', props.user && props.user.id)
                conversationData.append('friend_id', props.to && props.to.id)
                
                
                Axios.post('/api/newConversation', conversationData).then(res => {
                    
                    props.createConversation(res.data)
                    const conversationID = res.data.id 
                    const MessageData = new FormData
                        
                    MessageData.append('sender_id', props.user && props.user.id)
                    MessageData.append('friend_id', props.to && props.to.id)
                    MessageData.append('conversation_id', conversationID)
                    MessageData.append('text', text) 
                
                Axios.post('/api/newMessage', MessageData).then(res => {
                    setText('') 
                    console.log(res.data)     
                    setMessages([
                        ...messages,
                        res.data
                    ])
                }).catch(err => {
                })
            })
        } else {
            const MessageData = new FormData
            MessageData.append('sender_id', props.user && props.user.id)
            MessageData.append('friend_id', props.to && props.to.id)
            MessageData.append('conversation_id', props.data && props.data.id)
            MessageData.append('text', text) 
            
            
            Axios.post('/api/newMessage', MessageData).then(res => {
                setText('')
                setMessages([
                    ...messages,
                    res.data
                ])
                scrollToBottom()
            })
        } 
    }
}

const handleSendEmoji = () => {
    let emoji = new FormData
        emoji.append('sender_id', props.user && props.user.id)
        emoji.append('friend_id', props.to && props.to.id)
        emoji.append('conversation_id', props.data && props.data.id)
        emoji.append('text', props.emoji)

        Axios.post('/api/newMessage', emoji).then(res => {
            setMessages([
                ...messages,
                res.data
            ])
            scrollToBottom()
        })

    }
    
    const handleDeleteMessage = (id, sender) => {
        if(sender == props.user.id) {
            Axios.post(`/api/message/${id}/delete`).then(() => {
                let messagesToKeep = messages.filter(m => m.id !== id)
                setMessages(messagesToKeep)            
            })
        }
    }

    const handleShowEmojiPanel = e => {
        e.stopPropagation()
        setShowEmojiPanel(!showEmojiPanel)
    }

    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
                <div id="window" style={{ minHeight: '90%', overflowY: 'auto', padding: '.5rem .5rem 0 .5rem'}}>

                    {
                        messages && messages.map(m => (
                            <Message chatColor={props.chatColor && props.chatColor} user={props.user && props.user.id} from={props.to && props.to.name} message={m} delete={() => handleDeleteMessage(m.id, m.sender_id)}/>
                            ))
                        }

                </div>
                <div style={{ display: 'flex', position: 'relative', padding: '0 .5rem'}}>
                    <span style={{ width: '100%', display: 'flex'}}>
                        <Input autoComplete="off" type="text" name="text" onChange={e => setText(e.target.value)} value={text} onKeyDown={e => handleCreateConversation(e) }/>
                        <Emoji onClick={handleSendEmoji}>{ props.emoji && props.emoji }</Emoji>
                    </span>
                    { showEmojiPanel && <EmojiPanel chooseEmoji={(e) => setText(text + e)}/> }
                    <SVG onClick={(e) => handleShowEmojiPanel(e)} viewBox="0 0 38 38"><g fill-rule="evenodd"><g transform="translate(-893.000000, -701.000000)"><g transform="translate(709.000000, 314.000000)"><g><path d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387" fill="#2825b5"></path></g></g></g></g></SVG>
                </div>
            </div>
        </Container>
    );
};

export default MessageWindow;
