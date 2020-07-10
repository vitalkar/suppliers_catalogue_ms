import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app.context';
import { DELETE_PROMPT, DELETE_FROM_LIST } from '../constants/constants';


const Container = styled.div`
  height: 7rem;
  width: 50%; 
  border: 3px solid #fff;
  border-radius: 5px;
  display: ${props => props.show? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20%;
  left: 25%;
  background-color: #4682B4CC;
`;

const Message = styled.div`
  height: 40%;
  width: 100%; 
  padding-top: 0.5rem;
  border-radius: 5px;
  /* background-color: #B7C8E4; */
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
`;

const ActionsContainer = styled.div`
  height: 60%;
  width: 100%; 
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ActionButton = styled.div`
  height: 75%;
  width: 40%; 
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  color: #fff;
  cursor: pointer;
`;

export default function Prompt() {
  const { state, dispatch } = useContext(AppContext);

  const handleConfirm = () => {
    
    dispatch({ type: DELETE_FROM_LIST, payload: ''});
  }

  const handleCancel = () => {
    dispatch({ type: DELETE_PROMPT, payload: {show: false, msg: ''} });
  }

  return (
        <Container show={state.showPrompt}>
            <Message>{state.msgPrompt}</Message>
            <ActionsContainer>
                <ActionButton bg="#1E90FF" onClick={handleConfirm}>Yes</ActionButton>
        <ActionButton bg="#B22222" onClick={handleCancel}>Cancel</ActionButton>
            </ActionsContainer>
        </Container>
    );
}

