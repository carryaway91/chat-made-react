import React from 'react';
import { Container, Logo, User } from './NavStyles';

const Nav = props => {
    return (
        <Container>
            <Logo>Chatty</Logo>
            <User>
                { props.user && props.user.name }
            </User>
            <button onClick={props.logout}>Logout</button>
        </Container>
    );
};


Nav.propTypes = {

};


export default Nav;
