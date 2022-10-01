import React from "react";

import Link from "next/link";
import Router, { useRouter } from "next/router";
import { withRouter } from "next/router";
import NavLink from "../../components/nav-link";
//import { RightMenu } from './menu/right-menu/right-menu';
//import { LeftMenu } from './menu/left-menu/left-menu';
import { HeaderWrapper, HeaderBar } from "./header.style";
import { Logo } from "../../components/Logo";

const Header = () => {
  return (
    <>
      <HeaderBar>
        <span>Sígueme en Instagram y Twitter: @serdev_es</span>
      </HeaderBar>
      <HeaderWrapper id="layout-header">
        <Link href={"/"}>
          <a className="logo" style={{ display: "flex", alignItems: "center" }}>
            <Logo />
          </a>
        </Link>
        <div className="menu">
          <Link href={"/"}>
            <a style={{ display: "flex", alignItems: "center" }}>
              <span>Inicio</span>
            </a>
          </Link>
          <Link href={"/proyectos"}>
            <a
              className="menu-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Proyectos</span>
            </a>
          </Link>
          <Link href={"/about"}>
            <a
              className="menu-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span>Sobre mí</span>
            </a>
          </Link>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
