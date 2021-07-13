import React, { useState, useEffect } from 'react';
import { Container, Abbr } from './UserCircleStyles';

const UserCircle = props => {
    const [abbr, setAbbr] = useState()

    useEffect(() => {
        if(props.name !== null) {

            let abbr = props.name.slice(0, 1).toUpperCase()
            setAbbr(abbr)
        }
    }, [props.name])

    return (
        <Container w={props.w}>
            <Abbr size={props.s && props.s}>{ abbr ? abbr : 'none' }</Abbr>
        </Container>
    );
};




export default UserCircle;
