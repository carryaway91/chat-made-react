import React, { useState, useEffect } from 'react';
import Circle from '../userCircle/UserCircle'
import { Container, ColorBtn } from './DetailsStyles'

const Details = props => {
    const [colors, setColors] = useState()

    useEffect(() => {
        let colors = Object.values(props.chatColors)
        setColors(colors)
    }, [props.chatColors])
 
    return (
        <Container>
            <Circle w="5rem" name={props.to ? props.to.name : null} />
            <p>{ props.to.name } </p>

            <h3>Pick chat color</h3>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                {
                    colors && colors.map(c => (
                    <ColorBtn color={c} onClick={() => props.changeColor(c)} active={props.activeColor == c} />
                    ))
                }
            </div>
        </Container>
    );
};



export default Details;
