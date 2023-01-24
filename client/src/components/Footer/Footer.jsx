import { Container, Wrapper, Top, Bottom, Title, Text, Left, Right, Logo, Copyright, Payments, Links } from './Style';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Container>
      <Top>
        <Wrapper>
          <Title>Categorias</Title>
          <Links>Feminino</Links>
          <Links>Masculino</Links>
          <Links>Sapatos</Links>
          <Links>Acessórios</Links>
          <Links>Lançamentos</Links>
        </Wrapper>
        <Wrapper>
          <Title>Links</Title>
          <Links>FAQ</Links>
          <Links>Páginas</Links>
          <Links>Lojas</Links>
          <Links>Compare</Links>
          <Links>Cookies</Links>
        </Wrapper>
        <Wrapper>
          <Title>Sobre</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, saepe! Quia ipsa recusandae rerum corrupti at explicabo impedit
            quaerat, alias consequatur eos magni ipsam dicta magnam atque deleniti! Numquam, porro.
          </Text>
        </Wrapper>
        <Wrapper>
          <Title>Contato</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, saepe! Quia ipsa recusandae rerum corrupti at explicabo impedit
            quaerat, alias consequatur eos magni ipsam dicta magnam atque deleniti! Numquam, porro.
          </Text>
        </Wrapper>
      </Top>

      <Bottom>
        <Left>
          <Logo>CLOTHSTORE</Logo>
          <Copyright>© Copyright 2023. Todos os direitos reservados.</Copyright>
        </Left>
        <Right>
          <Payments src='/img/payment.png' />
        </Right>
      </Bottom>
    </Container>
  );
};
