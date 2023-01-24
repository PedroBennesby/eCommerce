import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Center = styled(Left)`
  font-size: 30px;
`;

export const Right = styled(Left)``;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

export const Image = styled.img``;

export const ItemText = styled.span``;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  color: #777;
`;

export const Icons = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartCount = styled.span`
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #141414;
  color: white;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
