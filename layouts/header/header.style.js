import styled, { keyframes } from 'styled-components';

export const HeaderBar = styled.div`
background-image: linear-gradient( -225deg, #231557 0%, #44107a 29%, #ff1361 100% );
  display:flex;
  flex-direction:row;
  width:100%;
  padding-top:4px;
  padding-bottom:4px;
  span{
    width:100%;
    font-size:13px;
  }
  text-align:center;
  color:white;
  font-weight:bold;
`


export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content:space-between;
  display: flex;
  flex-direction:row;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  align-items: center;
  height: 110px;
  max-width:800px;
  color: white;
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
  }

 /*  @media (max-width: 290px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  } */
`;


