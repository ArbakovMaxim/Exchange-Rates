import styled from 'styled-components';
import authBackgroundImage from '../images/authBg.jpg';

export const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${authBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

`;
