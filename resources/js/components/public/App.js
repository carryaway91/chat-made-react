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
    const [selectedColor, setSelectedColor] = useState()

    useEffect(() => {
        let user = JSON.parse(props.authUser)
        let friends = JSON.parse(props.users)
        setUser(user)
        setFriends(friends)
        setSelectedColor(msgColors.purple)
    }, [])
    

    const handleLogout = () => {
        Axios.post('/logout').then(res => {
            if(res.status == 204) {
                window.location = '/login'
            }
        }).catch(e => {
            console.log(e)
        })
    }
    
    const handleStartConversation = f => {
        setShowWindow(true)
        Axios.get(`/api/searchConversation/${user && user.id}/${f.id}`).then(res => {
            setConversation(res.data)
        }).catch(err => {
            setConversation(null)
        })
        setTextingTo(f)
    }

    const handleChangeChatColor = c => {
        console.log(c)
        setSelectedColor(c)
    }

    return (
        <div>
            <GlobalStyles />
            <Nav user={user} logout={handleLogout}/>
            <Main>
                <FriendPanel to={textingTo} friends={friends} startConversation={(f) => handleStartConversation(f)} />
                { showWindow 
                    ? 
                    <MessageWindow chatColor={selectedColor} to={textingTo} user={user && user} data={conversation && conversation }/> 
                    :
                    <div style={{ display: 'flex', flex: 3}}>
                        Choose a friend to chat with!
                    </div>
                }
                {
                    textingTo ? <Details to={textingTo} chatColors={msgColors} activeColor={selectedColor} changeColor={(c) => handleChangeChatColor(c) }/> : null
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
