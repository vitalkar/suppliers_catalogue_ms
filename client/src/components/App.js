import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppProvider } from '../contexts/app.context';
import Main from './Main';
import Navbar from './Navbar';
import Modal from './Modal';
import Prompt from './Prompt';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  position: relative;
`;

export default function App() {
  return (
    <Container>
        <AppProvider>
          <Prompt />
          <Modal />
          <Navbar />
          <Main />
        </AppProvider>
    </Container>
  );
}

