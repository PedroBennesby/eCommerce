import { Container, Column, Row, Image, Button } from './Style';
import { Link } from 'react-router-dom';

export const Categories = () => {
  return (
    <Container>
      <Column>
        <Row>
          <Image src='https://picsum.photos/200/300' />
          <Button>
            <Link to='/products/1'>Sale</Link>
          </Button>
        </Row>
        <Row>
          <Image src='https://picsum.photos/200/300' />
          <Button>
            <Link to='/products/1'>Sale</Link>
          </Button>
        </Row>
      </Column>
      <Column>
        <Row>
          <Image src='https://picsum.photos/200/300' />
          <Button>
            <Link to='/products/1'>Sale</Link>
          </Button>
        </Row>
      </Column>
      <Column big>
        <Row>
          <Column>
            <Row>
              <Image src='https://picsum.photos/200/300' />
              <Button>
                <Link to='/products/1'>Sale</Link>
              </Button>
            </Row>
          </Column>
          <Column>
            <Row>
              <Image src='https://picsum.photos/200/300' />
              <Button>
                <Link to='/products/1'>Sale</Link>
              </Button>
            </Row>
          </Column>
        </Row>
        <Row>
          <Image src='https://picsum.photos/200/300' />
          <Button>
            <Link to='/products/1'>Sale</Link>
          </Button>
        </Row>
      </Column>
    </Container>
  );
};
