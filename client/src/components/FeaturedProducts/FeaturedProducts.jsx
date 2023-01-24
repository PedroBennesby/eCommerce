import { Container, Top, Bottom, Title, Text } from './Style';
import { Card } from '../Card/Card';

export const FeaturedProducts = ({ type }) => {
  const data = [];

  return (
    <Container>
      <Top>
        <Title>Produtos {type}</Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut mollitia nam dignissimos consequuntur tempora quis ipsam dolorem rerum a?
          Cumque illo laboriosam harum molestiae amet, suscipit tempore facere blanditiis?
        </Text>
      </Top>
      <Bottom>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Bottom>
    </Container>
  );
};
