import { useState } from 'react';
import { Container, Wrapper, Image, IconsContainer, Icons } from './Style';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <Container>
      <Wrapper currentSlide={currentSlide * 100}>
        {data.map((item, index) => (
          <Image key={index} src={item} alt='' />
        ))}
      </Wrapper>
      <IconsContainer>
        <Icons>
          <ArrowLeft size={30} onClick={prevSlide} />
        </Icons>
        <Icons>
          <ArrowRight size={30} onClick={nextSlide} />
        </Icons>
      </IconsContainer>
    </Container>
  );
};
