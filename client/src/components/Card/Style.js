import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;

  z-index: 1;

  &:hover {
    ${(props) => props.secondImage && 'z-index: 2'}
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const PricesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Price = styled.h3`
  font-size: 18px;
  font-weight: 500;

  ${(props) => props.oldPrice && 'text-decoration: line-through; color: gray;'}
`;

export const New = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #fff;
  color: teal;
  padding: 3px 5px;
  z-index: 3;
  font-weight: 500;
  font-size: 12px;
`;
