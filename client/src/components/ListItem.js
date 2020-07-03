import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/app.context';


const Container = styled.li`
  height: 3rem;
  width: 100%;
  /* background-color: #f0f0f0; */
  border-bottom: 2px solid #f0f0f0;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #C68513;
  }
`;

const Content = styled.div`
    display: flex;
    height: 100%;
    width: 75%;
`;

const ContentItem = styled.div`
    height: 100%;
    width: 20%;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
`;

const EnableCheck = styled.input`
    height: 1rem;
    width: 1rem;
`;

const ActionsContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ActionsButton = styled.div`
  height: 100%;
  width: 3rem;
  background: url('images/${props => props.name}.svg') center / 75% 75% no-repeat;
  transition: all 0.2s ease;
  &:hover {
  background-image: url('images/${props => props.name}_active.svg');
  }
`;

export default function ListItem({data}) {
    const { state, dispatch } = useContext(AppContext);    
    let content;

    const handleDelete = async (e) => {
        const response = await fetch(`http://localhost:80/dev/suppliers_catalogue_ms/server/api/${state.currList}/readAll`);
    }

    const handleUpdate = async (e) => {
        console.log(e.target);
    }

    switch (state.currList) {
        case 'items':
            content = (
                <Content>
                    <ContentItem>
                        <EnableCheck type="checkbox" checked readOnly />
                    </ContentItem>
                    <ContentItem>{data.name}</ContentItem>
                    <ContentItem>{data.c_number}</ContentItem>
                    <ContentItem>{data.price}</ContentItem>
                    <ContentItem>{data.has_vat}</ContentItem>
                </Content>
            );
            break;
        case 'clients':
            content = (
                <Content>
                    <ContentItem>
                        <EnableCheck type="checkbox" checked readOnly />
                    </ContentItem>
                    <ContentItem>{data.name}</ContentItem>
                    <ContentItem>{data.type}</ContentItem>
                </Content>
            );
            break;
        case 'diversities':
            content = (
                <Content>
                    <ContentItem>
                        <EnableCheck type="checkbox" checked readOnly />
                    </ContentItem>
                    <ContentItem>{data.name}</ContentItem>
                </Content>
            );
            break;
        default:
            content = null;
            break;
    }

    return (
        <Container>
            {content}
            <ActionsContainer>
                <ActionsButton id="" name="edit" onClick={handleUpdate} />
                <ActionsButton id="" name="delete" onClick={handleDelete} />
            </ActionsContainer>
        </Container>
        );
}

