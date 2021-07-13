import React, { useState, useEffect } from 'react';
import Circle from '../userCircle/UserCircle'
import { Container, ColorBtn, Panel, EmojiBtn } from './DetailsStyles'

const Details = props => {
    const [colors, setColors] = useState()
    const [emojies, setEmojies] = useState()
    useEffect(() => {
        let colors = Object.values(props.chatColors)
        setColors(colors)
        let emojies = Object.values(props.emojies)
        setEmojies(emojies)

    }, [props.chatColors])
 
    return (
        <Container>
            <Circle w="5rem" name={props.to ? props.to.name : null} s="2rem"/>
            <p>{ props.to.name } </p>

            <h3>Chat color</h3>
            <Panel>
                {
                    colors && colors.map(c => (
                    <ColorBtn color={c} onClick={() => props.changeColor(c)} active={props.activeColor == c} />
                    ))
                }
            </Panel>
            <h3>Chat Emoji</h3>
            <Panel>
                { emojies && emojies.map(e => <EmojiBtn onClick={() => props.changeEmoji(e)} active={props.activeEmoji == e}>{e}</EmojiBtn>)}
            </Panel>
        </Container>
    );
};



export default Details;
