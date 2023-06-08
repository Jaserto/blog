import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';

const StyledDiv = styled.div`
  color:white;
  max-width: 800px;
  padding: 0 15px;
  p{
    font-size:15px;
    line-height:1.75em;
  }
  a{
   color:blue;
   margin-bottom: 10px;
  }
`;

const About = () => {
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
                I am a software engineer with industry experience building websites 
                and web applications. I specialize in JavaScript and have professional experiences working with Node.JS, React.JS, Angular, TypeScript and React Native.
              </p>
              <p>
                I also have experience working with Python, Rust, MongoDB, MySQL, Java and Bash.
                If you want see more, get in touch with my github.
              </p>
              <a href="https://github.com/Jaserto">Personal Github.</a>

            </StyledDiv>
          </main>
        </>
      )
    }
    
    
    
    export default About
    