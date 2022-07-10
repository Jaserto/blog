import styled from 'styled-components';
import "@fontsource/inter"

export const LayoutWrapper = styled.div`
    font-family: 'Inter', sans-serif;
    width: 100%; 
    height: 100%;
    background-color:#080911;  
   /*  #12131E */
    display:flex;
    flex-direction: column;
    align-items: center;
    /* padding: 0 90px; */
    @media (max-width: 830px) {
      width: 100%;
      margin:0;
      padding: 0 30px;
    }
    @media screen and (max-width: 400px) {
      padding: 15px;
      height: 100%;
    }
   
`;
