import { Container, Wrapper, Text, MailContainer, Mail, Button, IconsContainer } from './Style';
import { TwitterLogo, FacebookLogo, InstagramLogo, GoogleLogo, PinterestLogo } from 'phosphor-react';

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Receba nossas notícias:</Text>
        <MailContainer>
          <Mail type='text' placeholder='Insira seu email...' />
          <Button>Cadastrar</Button>
        </MailContainer>
        <IconsContainer>
          <TwitterLogo size={24} weight='fill' />
          <FacebookLogo size={24} weight='fill' />
          <InstagramLogo size={24} weight='fill' />
          <GoogleLogo size={24} weight='fill' />
          <PinterestLogo size={24} weight='fill' />
        </IconsContainer>
      </Wrapper>
    </Container>
  );
};
