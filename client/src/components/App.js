import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppProvider } from '../contexts/app.context';
import { BrowserRouter } from "react-router-dom";
import Main from './Main';
import Navbar from './Navbar';
import Modal from './Modal';

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
          <Modal />
          <Navbar />
          <Main />
        </AppProvider>
    </Container>
  );
}

