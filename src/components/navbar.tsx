import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavItem>
                <NavLink tag={Link} to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/myTodo">My Todo</NavLink>
            </NavItem>
        </Nav>
    );
}

export default NavBar;