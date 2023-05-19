import React from 'react';
import { useRouter } from 'next/router';
//import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import Header from './header/header';
import Footer from './footer/footer';



const Layout = ({children, type, metadata}) => {
  const { pathname, query } = useRouter();
  
  const isBlogTemplate = type === "post" && metadata.date;
 /*  const isHomePage = pathname === '/'; */
  return (
    <LayoutWrapper>
     <Header />
             {children }
    <Footer />
    </LayoutWrapper>
     
  );
};

export default Layout;
