import React from 'react';
import { Container, Left, Center, Right, Wrapper, Item, Image, ItemText, IconsContainer, Icons, CartCount } from './Style';
import { CaretDown, MagnifyingGlass, User, Heart, ShoppingCart } from 'phosphor-react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Item>
            <Image src='/img/en.png' />
            <CaretDown size={20} />
          </Item>
          <Item>
            <ItemText>BRL</ItemText>
            <CaretDown size={20} />
          </Item>
          <Item>
            <Link to='/products/1'>Feminino</Link>
          </Item>
          <Item>
            <Link to='/products/2'>Masculino</Link>
          </Item>
          <Item>
            <Link to='/products/3'>Infantil</Link>
          </Item>
        </Left>
        <Center>
          <Link to='/'>CLOTHSTORE</Link>
        </Center>
        <Right>
          <Item>
            <Link to='/products/1'>Página Inicial</Link>
          </Item>
          <Item>
            <Link to='/products/1'>Sobre</Link>
          </Item>
          <Item>
            <Link to='/products/1'>Contato</Link>
          </Item>
          <Item>
            <Link to='/products/1'>Lojas</Link>
          </Item>
          <IconsContainer>
            <Icons>
              <MagnifyingGlass size={20} />
            </Icons>
            <Icons>
              <User size={20} />
            </Icons>
            <Icons>
              <Heart size={20} />
            </Icons>
            <Icons>
              <ShoppingCart size={20} />
              <CartCount>0</CartCount>
            </Icons>
          </IconsContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};
