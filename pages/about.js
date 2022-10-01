import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';

const StyledDiv = styled.div`
  color:white;
  max-width: 800px;
  p{
    font-size:15px;
  }
`;

const About = () => {
    //const tag = posts.tags.split(',');
     // console.log(posts);
      return (
        <>
          <Head>
            <title>About</title>
            <meta name="aboutme" content="About me" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
         
          <main>
            <StyledDiv>
              <div>
                <h3>Javier</h3>
                <span>Software Developer</span>
              </div>
              <p>
                I am a Front End developer with industry experience building websites 
                and web applications. I specialize in JavaScript and have professional experiences working with Node.JS, React.JS, Angular, TypeScript and React Native.
              </p>
              <p>
                I also have experience working with MongoDB, MySQL, Java and Bash.
              </p>

            </StyledDiv>
          </main>
        </>
      )
    }
    
    
    
    export default About
    