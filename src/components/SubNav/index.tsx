import React, {ReactNode, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {NavbarProfile} from './styles';

type SubNavProps = {
  children: ReactNode;
};

export function SubNav({children}: SubNavProps): ReactElement {
  return (
    <NavbarProfile>
      <ul>{children}</ul>
    </NavbarProfile>
  );
}
