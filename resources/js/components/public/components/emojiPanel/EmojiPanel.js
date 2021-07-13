import React, { useState } from 'react';
import { Container } from './EmojiPanelStyles';

const EmojiPanel = props => {
    const [emojies, setEmojies] = useState(['😀', '😄', '😁', '😅', '😂', '🙂', '😍', '😋' , '🙄'])
    return (
        <Container id="panel" onClick={e=> e.stopPropagation()}>
            { emojies && emojies.map(e => <span onClick={() => props.chooseEmoji(e)}>{e}</span>)}
        </Container>
    );
};




export default EmojiPanel;
