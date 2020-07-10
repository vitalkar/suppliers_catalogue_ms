import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app.context';
import { TOGGLE_MODAL, GET_CURR_LIST } from '../constants/constants';
import { fetchCurrList } from '../shared/service';
import { useInputChange } from '../shared/hooks'; 

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: ${props => (props.show) ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f099;
`;

const ModalHeader = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #f0f0f0;
  border-radius: 5px 5px 0 0;
`;

const CloseButton = styled.div`
  width: 20%;
  height: 3rem;
  background: url('images/close.svg') center / contain no-repeat;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-image: url('images/close_active.svg');
  }
`;

const Form = styled.form`
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 5px 5px;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  height: 3rem;
  width: 80%;
  padding-left: 0.5rem;
  border-radius: 5px;
  border: none;
  margin-bottom: 1rem; 
  outline-color: #C68513;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  background-color: #B7C8E4;
  color: #fff;

`;

const Select = styled.select`
  height: 3rem;
  width: 80%;
  border-radius: 5px;
  border: none;
  margin-bottom: 1rem; 
  outline-color: #C68513;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  background-color: #B7C8E4;
  color: #fff;
`;

const Option = styled.option`
  height: 100;
  width: 100%;
  padding-left: 0.5rem;
  border: none;
  outline-color: #C68513;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  height: 3rem;
  width: 80%;
  border: none;
  border-radius: 5px;
  margin-top: 2rem;
  background-color: #C68513;
  color: #f0f0f0;
  outline-color: #C68513; 
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease;
    &:hover {
    background-color: #B7C8E4;
    color: #C68513;
    }   
`;

export default function Modal() {
    const { state, dispatch } = useContext(AppContext);
    
    let formContent;


    const [input, handleInputChange] = useInputChange({});

    const handleClose = () => {
        dispatch({type: TOGGLE_MODAL, payload: !state.showModal})
    }

    const handleFormClear = ({elements}) => {
        for (const name in input) {
            console.log();
            elements[name].value = '';
        }   
    }

    const handleSubmit = async (e) => {        
        e.preventDefault();
        
        console.log(e.target);
        handleFormClear(e.target);
    
        const options = {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(input)
        };

        const response = await fetch(`http://localhost:80/dev/suppliers_catalogue_ms/server/api/${state.currList}/create`, options)
        const result = await response.json();
        if (result) {
            //
        }
    }
    useEffect(() => {
        fetchCurrList(state.currList)
            .then((result) => {
                dispatch({ type: GET_CURR_LIST, payload: result });

            });
    }, [state.currList]);

    switch (state.currList) {
        case 'items':
            formContent = (
                <>
                    <Input type="text" placeholder="name" name="name" value={input.name || ''} onChange={handleInputChange} />
                    <Input type="number" placeholder="price" name="price" value={input.price || ''} onChange={handleInputChange} />
                    <Input type="text" placeholder="has vat" value={''} readOnly />
                </>
            );
            break;
        case 'clients':
            formContent = (
                <>
                    <Input type="text" placeholder="name" name="name" value={input.name || ''} onChange={handleInputChange} />
                    <Select name="type">
                        <Option value="resturant" defaultValue>Resturant</Option>
                        <Option value="coffee_house">Coffee House</Option>
                        <Option value="bar">Bar</Option>
                    </Select>
                </>
            );
            break;
        case 'diversities':
            formContent = (
                <>
                    <Input type="text" placeholder="name" name="name" value={input.name || ''} onChange={handleInputChange} />
                </>
            );
            break;
    
        default:
            break;
    }

    return (
        <Container show={state.showModal}>
            <ModalHeader>
                <CloseButton onClick={handleClose} />
            </ModalHeader>
            <Form onSubmit={handleSubmit}>
                {formContent}
                <SubmitButton type="submit">SUBMIT</SubmitButton>
            </Form>
        </Container>
    );
}

