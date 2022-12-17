import {
  Aside,
  Button,
  Container,
  Em,
  Img,
  Main,
  P,
  Title,
  Wrapper,
  WrapperAll,
} from './PageNotFound.styled';
import lostImage from '../../images/404/30474344.png';

const PageNotFound = () => {
  return (
    <>
      <WrapperAll>
        <Container>
          <Wrapper>
            <Aside>
              <Img src={lostImage} alt="404 Image" />
            </Aside>

            <Main>
              <Title>Not found!</Title>
              <P>
                <Em>This page does not exist</Em>
              </P>
              <Button to="/">Go home</Button>
            </Main>
          </Wrapper>
        </Container>
      </WrapperAll>
    </>
  );
};

export default PageNotFound;
