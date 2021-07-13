import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FriendPanel from './components/friendPanel/FriendPanel';
import Nav from './components/nav/Nav'
import MessageWindow from './components/messageWindow/MessageWindow';
import { Main } from './AppStyles';
import { GlobalStyles } from './globalStyles';
import Details from './components/details/Details';

const App = props => {
    const [user, setUser] = useState()
    const [friends, setFriends] = useState()
    const [textingTo, setTextingTo] = useState()
    const [conversation, setConversation] = useState(null)
    const [showWindow, setShowWindow] = useState(false)
    const [msgColors, setMsgColors] = useState({
        blue: '#4b4bb9',
        purple: '#5c2782',
        green: '#159e29',
        orange: '#e89017',
        black: '#020202',
        red: '#d42b2b',
    })
    const [emojies, setEmojies] = useState(['👍', '👊', '💪', '🤘', '✌️', '👌'])
    const [selectedColor, setSelectedColor] = useState()
    const [selectedEmoji, setSelectedEmoji] = useState()

    useEffect(() => {
        let user = JSON.parse(props.authUser)
        let friends = JSON.parse(props.users)
        setUser(user)
        setFriends(friends)
        
        let color = JSON.parse(localStorage.getItem('color'))
        if(!color) {
            localStorage.setItem('color', JSON.stringify(msgColors.blue))
            setSelectedColor(msgColors.blue)
        } else {
            setSelectedColor(color)
        }
        
        let emoji = JSON.parse(localStorage.getItem('emoji'))
        if(!emoji) {
            localStorage.setItem('emoji', JSON.stringify(emojies[0]))
            setSelectedEmoji(emojies[0])
        } else {
            setSelectedEmoji(emoji)
        }

    }, [])
    
    useEffect(() => {
        let conversation = JSON.parse(localStorage.getItem('conversation'))
        if(!conversation) {
            setConversation(null)
        } else {
            let sender = conversation.sender_id
            let to = JSON.parse(localStorage.getItem('to'))
            Axios.get(`/api/searchConversation/${sender}/${to.id}`).then(res => {
                console.log(res.data)
                setConversation(res.data)
            })
            setTextingTo(to)
            setShowWindow(true)
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem('conversation')
        localStorage.removeItem('to')
        Axios.post('/logout').then(res => {
            if(res.status == 204) {
                window.location = '/login'
            }
        }).catch(e => {
            console.log(e)
        })
    }
    
    const handleStoreConversation = data => {
        setConversation(data)
        localStorage.setItem('conversation', JSON.stringify(data))
    }

    const handleStartConversation = f => {
        setShowWindow(true)
        Axios.get(`/api/searchConversation/${user && user.id}/${f.id}`).then(res => {
            localStorage.setItem('conversation', JSON.stringify(res.data))
            setConversation(res.data)
        }).catch(err => {
            localStorage.setItem('conversation', JSON.stringify(null))
            setConversation(null)
        })
        localStorage.setItem('to', JSON.stringify(f))
        setTextingTo(f)
    }

    const handleChangeChatColor = c => {
        localStorage.setItem('color', JSON.stringify(c))
        setSelectedColor(c)
    }

    const handleChangeEmoji = e => {
    localStorage.setItem('emoji', JSON.stringify(e))
        setSelectedEmoji(e)
    }

    return (
        <div>
            <GlobalStyles />
            <Nav user={user} 
                logout={handleLogout} 
                changeEmoji={e =>handleChangeEmoji(e)} 
                changeColor={c => handleChangeChatColor(c)} 
                activeColor={selectedColor} 
                activeEmoji={selectedEmoji} 
                emojies={emojies && emojies} 
                colors={msgColors && msgColors}
            />
            <Main>
                <FriendPanel to={textingTo} friends={friends} startConversation={(f) => handleStartConversation(f)} />
                { showWindow 
                    ? 
                    <MessageWindow createConversation={data => handleStoreConversation(data)} chatColor={selectedColor} emoji={selectedEmoji} to={textingTo && textingTo} user={user && user} data={conversation && conversation }/> 
                    :
                    <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center', fontSize: '2.5rem'}}>
                        Choose a friend to chat with!
                    </div>
                }
                {
                    textingTo ? <Details to={textingTo} 
                                        emojies={emojies} 
                                        activeEmoji={selectedEmoji}
                                        chatColors={msgColors} 
                                        activeColor={selectedColor} 
                                        changeEmoji={e => handleChangeEmoji(e)}
                                        changeColor={(c) => handleChangeChatColor(c) }/> : null
                }
            </Main>
        </div>
    );
}

export default App;


if (document.getElementById('app')) {
    let authUser = document.getElementById('app').getAttribute('authUser');
    let users = document.getElementById('app').getAttribute('users');
    ReactDOM.render(<App authUser={authUser} users={users} />, document.getElementById('app'));
}
