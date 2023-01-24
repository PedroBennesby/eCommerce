import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  gap: 10px;
  margin: 10px;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ big }) => big && 'flex: 2;'}
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  position: absolute;
  min-width: 100px;
  width: fit-content;
  height: 50px;
  padding: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: none;
  cursor: pointer;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: 500;
`;
