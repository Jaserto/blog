import React from 'react';


import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import NavLink from '../../components/nav-link';
//import { RightMenu } from './menu/right-menu/right-menu';
//import { LeftMenu } from './menu/left-menu/left-menu';
import {FooterWrapper} from './footer.style';



const Footer = () => {
  
 
  return (
    <FooterWrapper>
      <hr style={{width: '100%', marginTop: '10px'}}/>
      <div style={{
        display: 'flex',
       flexDirection: 'row'
      }}>
          <Link href={'/'}>
          <a
            style={{ margin:'10px',display: 'flex', alignItems: 'center'}}
          >
            <span>home</span>
          </a>
        </Link>
        <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ margin:'10px',display: 'flex', alignItems: 'center'}}
          >
            <span>projects</span>
          </a>
        </Link>
      <Link href={'/about'}>
          <a
            className="menu-item"
            style={{ margin:'10px',display: 'flex', alignItems: 'center'} }
          >
            <span>about</span>
          </a>
        </Link>
      {/* <LanguageSwitcher /> */}
</div>
<p style={{
  fontSize:'13px'
}}>
made with ❤️ © javierserna.com { new Date().getFullYear() }
</p>
    </FooterWrapper>
  );
};

export default Footer;
