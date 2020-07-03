import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app.context';
import { GET_CURR_LIST } from '../constants/constants';
import List from './List';
import { fetchCurrList } from '../shared/service';

const Container = styled.div`
  height: 85%;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListTitle = styled.div`
    width: 90%;
    height: 3rem;
    padding-left: 1rem;
    border-bottom: 2px solid #f0f0f0;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    background-color: #C68513;
    color: #fff;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
`;

const ListHeader = styled.div`
    width: 90%;
    height: 4rem;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    background-color: #C68513;
    color: #fff;
`;

const ListHeaderItem = styled.div`
    width: 15%;
    height: 100%;
    padding-left: 0.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    word-break: break-all;
`;

export default function Main() {
    const { state, dispatch } = useContext(AppContext);
    let listItems, listHeader;
    useEffect(() => {
        fetchCurrList(state.currList)
        .then((result) => {
            dispatch({ type: GET_CURR_LIST, payload: result });
        });
    },[state.currList]);

    switch (state.currList) {
        case 'items':
            listHeader = ( 
                <ListHeader>
                    <ListHeaderItem>enable</ListHeaderItem>
                    <ListHeaderItem>name</ListHeaderItem>
                    <ListHeaderItem>c number</ListHeaderItem>
                    <ListHeaderItem>price</ListHeaderItem>
                    <ListHeaderItem>has vat</ListHeaderItem>
                </ListHeader>
                );
            listItems = state.items;
            break;
        case 'clients':
            listHeader = (
                <ListHeader>
                    <ListHeaderItem>enable</ListHeaderItem>
                    <ListHeaderItem>name</ListHeaderItem>
                    <ListHeaderItem>type</ListHeaderItem>
                </ListHeader>
            );
            listItems = state.clients;
            break;
        case 'diversities':
            listHeader = (
                <ListHeader>
                    <ListHeaderItem>enable</ListHeaderItem>
                    <ListHeaderItem>name</ListHeaderItem>
                </ListHeader> 
            );
            listItems = state.diversities;
            break;
        default:
            listItems = [];
            break;
    }
    return (
        <Container>
            <ListTitle>{state.currList} LIST</ListTitle>
            {listHeader}
            <List data={listItems} />
        </Container>
    );
}

