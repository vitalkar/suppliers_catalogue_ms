import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AppContext } from '../contexts/app.context';
import { SET_CURR_LIST, TOGGLE_MODAL } from '../constants/constants';
// import List from './List';


const Container = styled.div`
  height: 15%;
  width: 100%;
  background-color: #6D8FC7;
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  color: #f0f0f0;
  font-size: 1.3rem;
  text-transform: uppercase;
  word-break: break-all;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease; 
  &:hover {
      background-color: #f0f0f0;
      color: #6D8FC7;
  }
`;

const ActionBar = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`;

const ActionButton = styled.div`
  height: 4rem;
  width: 4rem;
  border: 2px solid #f0f0f0;
  border-radius: 50%;
  background:  url('images/${props => props.name}.svg') center / 75% 75% no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease; 
  &:hover {
      box-shadow: 0px 0px 1rem #f0f0f0;
  }
`;

const Logo = styled.div`
  height: 100%;
  width: 15%;
  background: url('images/admin_panel.svg') center / 5rem no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function Navbar() {

    const { state, dispatch } = useContext(AppContext);

    const handleListClick = (e) => {
        const { id } = e.target;
        dispatch({ type: SET_CURR_LIST, payload: id});
    };

    const handleAddListItem = (e) => {
        const { showModal } = state; 
        dispatch({ type: TOGGLE_MODAL, payload: !state.showModal})
    };

    useEffect(() => {

        
    }, [state.currList]);

    return (
        <Container>
            <Logo />
            <NavItem id="items" onClick={handleListClick}>items</NavItem>
            <NavItem id="clients" onClick={handleListClick}>clients</NavItem>
            <NavItem id="diversities" onClick={handleListClick}>diversities</NavItem>
            <ActionBar>
                <ActionButton name="add" onClick={handleAddListItem} />
            </ActionBar>
        </Container>
    );
}

