import React, { useState, useEffect} from 'react';
import { Container, Logo, User, Btn, Color, Emoji, NavLogo } from './NavStyles';

const Nav = props => {
    const [colors, setColors] = useState()
    const [showColors, setShowColors] = useState(false)
    const [showEmojies, setShowEmojies] = useState(false)
    
    useEffect(() => {
        if(showColors) {
            setShowEmojies(false)
        }

    }, [showColors])
    
    useEffect(() => {
        if(showEmojies) {
            setShowColors(false)
        }
        
    }, [showEmojies])
    useEffect(() => {
        if(props.colors) {
            let arr = Object.values(props.colors)
            setColors(arr)
        }
    }, [props.colors])

    return (
        <Container>
            <Logo>Chatty</Logo>
            <NavLogo>Ch</NavLogo>
            <div className="innerWrap">
                <div className="colors">
                    <Btn onClick={() => setShowColors(!showColors)}>Color</Btn>
                    {
                        showColors &&
                        <div className="panel panel1 colors">
                            { colors && colors.map(c => <Color c={c} active={props.activeColor && props.activeColor === c} onClick={() => props.changeColor(c)}/>)}
                        </div>
                    }
                </div>
                <div className="emojies">
                    <Btn onClick={() => setShowEmojies(!showEmojies)}>Emoji</Btn>
                    {
                        showEmojies && 
                        <div className="panel panel2">
                            { props.emojies && props.emojies.map(e => <Emoji active={props.activeEmoji && props.activeEmoji == e} onClick={() => props.changeEmoji(e)}>{e}</Emoji>)}
                        </div>
                    }
                </div>
                <User>
                    { props.user && props.user.name }
                </User>
                <button className="logout" onClick={props.logout}>Logout</button>
            </div>
        </Container>
    );
};


Nav.propTypes = {

};


export default Nav;
