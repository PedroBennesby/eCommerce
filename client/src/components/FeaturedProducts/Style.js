import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px 200px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const Title = styled.h1`
  flex: 2;
  text-transform: capitalize;
`;

export const Text = styled.p`
  flex: 3;
  color: #555;
`;
