import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const HeaderWrapper = styled.header`

  display: flex;
  width: 100%;
  justify-content:space-between;
  display: flex;
  flex-direction:row;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  align-items: center;
  height: 130px;
  max-width:800px;
  color: white;
  padding: 0 30px;
  .menu{
    display: flex;
    flex-direction:row;
    a{
      margin-left: 15px;
    }
  }
  @media (max-width: 830px) {
    display:flex;
    align-items:center;
    justify-content:center;
   .logo{
     margin-right:0;
   }
    .menu{
      margin-top:10px;
      display:flex;
      align-items: center;
      justify-content: center;
      font-size:15px;
      a{
        margin-left: 15px;
      }
    }
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:0;
    padding: 0 30px;
  }

 /*  @media (max-width: 290px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  } */
`;


