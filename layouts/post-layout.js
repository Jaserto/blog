import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import "@fontsource/inter"


export const PostLayout = styled.div`
overflow:hidden;
  height:100%;
  width: 100%;
  display:flex;
  font-size: 16px;
  flex-direction: column;
  text-align:left;
  align-items:center;
  line-height: 1.7;
  max-width: 800px;
  padding: 0 25px; 
  font-family: "Inter"; 
  article{
    width: 100%;
    margin:0;
  }
  strong{
    font-size:14px;
    font-weight: normal;
    color:white;
    margin:0 2px;
    border-radius:0.2em;
    padding: 1px 2px;
    background-color: #4c4c4c;
  }
  img{ 
      display:flex; 
      flex:1;
      border-radius: 33px;
     margin:auto;
     max-width:400px;
      padding:30px;  
  }
  .cabecera{
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:left;
  }
  .div3{
    display:flex;
    flex-direction: column;
  }
  .tags{
    display: flex;
    flex-direction: row;
    align-items: center;
    }
  .tag2{
    color:#444444;
    border-radius:5px;
    padding:1px 7px;
    font-size:12px;
    background-color:#C9FFDC;
    margin: 0 7px;
  }
  .tag1{
    background: linear-gradient(207.29deg, #030773 12.44%, #5258fb 86.31%);
      color:white;
      border-radius:5px;
      padding:2px 7px;
      font-size:12px;
  }

  h1{
    font-size: 40px;
    color: #f3f3f3;
  }
  h2{
    margin:40px 0 0 0;
    color: #f3f3f3;
  }
  ul{
    color: #f3f3f3;
  }
  h3{
    font-size: 24px;
    margin:25px 0 0 0;
    color: #f3f3f3;
  }
  p{
    color: #eaeaea;
    font-size:15px;
    font-weight: 400;
    line-height:1.75;
    margin-bottom:20px;
  }
  
  @media (max-width: 830px) {
    padding: 0 15px;  
article{
  width: 100%;
  margin:0;

}
h1{
  font-size: 20px;
  width: 100%;
}
.cabecera{
  width: 100%;
}
.tags{
  display:flex;
  flex-direction:row;
  width: 100%;
  span{
    font-size:11px;
  }
}
.tag1{
  padding:1px 3px;
  margin:0;
}
.tag2{
  padding:1px 3px;
  margin: 0 3px;
}
img{
  width: 100%;
} 
p{
  font-size:16px;
}
  }
  
`;


