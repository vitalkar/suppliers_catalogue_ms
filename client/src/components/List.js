import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';


const Container = styled.ul`
  height: 85%;
  width: 90%;
  border-radius: 0 0 5px 5px;
  background-color: #B7C8E4;
  list-style-type: none;
  overflow: hidden;
`;

export default function List({data}) {
    return (
        <Container>
            {data.map((dataItem, index) => <ListItem key={index} data={dataItem} />)}
        </Container>
    );
}

