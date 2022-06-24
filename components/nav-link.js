import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';
//import { FormattedMessage } from 'react-intl';



const NavLink = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div onClick={onClick} className={''}>
     
        <Link href={'/[type]'} as={href}>
          <a
            className={isCurrentPath ? ' current-page' : ''}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span>{label}</span>
          </a>
        </Link>
    </div>
  );
};

export default withRouter(NavLink);
