import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 400vw;
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.currentSlide}vw);
  transition: all 1.5s ease;
`;

export const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

export const IconsContainer = styled.div`
  width: fit-content;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 100px;
  gap: 10px;
`;

export const Icons = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  justify-content: center;
`;
