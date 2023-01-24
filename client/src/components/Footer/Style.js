import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px 200px 20px 200px;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: justify;
  font-size: 14px;
`;

export const Top = styled.div`
  display: flex;
  gap: 50px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div``;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #2879fe;
`;

export const Copyright = styled.span`
  margin-left: 20px;
  font-size: 12px;
  color: #777;
`;

export const Payments = styled.img`
  height: 50px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #555;
`;

export const Links = styled.span`
  color: #777;
`;

export const Text = styled.p`
  color: #777;
`;
