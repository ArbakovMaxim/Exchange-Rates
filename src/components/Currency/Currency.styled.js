
import styled from 'styled-components';
import backPicture from './images/bg.png';

export const CurrencyBlock = styled.div`
  width: 336px;
  height: 182px;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 0px;
  margin-left: 0px;

  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;

  background: #4A56E2;
  background-image: url(${backPicture});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

`;

export const HeadTable = styled.table`
  table-layout: fixed;
  height: 50px;
  width: 100%;
  background: rgb(255, 255, 255, 0.2);
`;

export const DataTable = styled.table`
  table-layout: fixed;
  height: 125px;
  width: 100%;
`;

export const HeadCell = styled.td`
  font-size: 16px;
  font-weight: 700;
`;

export const BodyCell = styled.td`
  font-size: 16px;
  font-weight: 400;
`;
