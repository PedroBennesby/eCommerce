import { Container, ImageContainer, Image, Title, PricesContainer, Price, New } from './Style';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <Container>
        <ImageContainer>
          {item.isNew && <New>Novo</New>}
          <Image src={item.img} />
          <Image src={item.img2} secondImage />
        </ImageContainer>
        <Title>{item.title}</Title>
        <PricesContainer>
          <Price oldPrice>R${item.oldPrice}</Price>
          <Price>R${item.price}</Price>
        </PricesContainer>
      </Container>
    </Link>
  );
};
