import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app.context';
import { TOGGLE_MODAL, GET_CURR_LIST, SET_CURR_LIST } from '../constants/constants';
import { fetchCurrList } from '../shared/service';

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

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [clientType, setClientType] = useState('');

    const handleClose = () => {
        dispatch({type: TOGGLE_MODAL, payload: !state.showModal})
    }

    const handleSubmit = async (e) => {        
        e.preventDefault();
        
        let data; 

        switch (state.currList) {
            case 'items':
                data = {
                    name: name,
                    price: price,
                    has_var: ''
                };
                break;
            case 'clients':
                data = {};
                break;
            case 'diversities':
                data = {};
                break;
            default:
                data = {};
                break;
        }

        const options = {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
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
                    <Input type="text"  placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <Input type="text" placeholder="has vat" value={''} readOnly />
                </>
            );
            break;
        case 'clients':
            formContent = (
                <>
                    <Input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </>
            );
            break;
        case 'diversities':
            formContent = (
                <>
                    <Input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
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

