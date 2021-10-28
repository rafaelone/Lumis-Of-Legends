import React, {ReactElement} from 'react';
import {NavigationGameType} from '../NavigationGameType';
import {NavigationUser} from '../NavigationUser';

import {HeaderContainer} from './styles';

export function Header(): ReactElement {
  return (
    <HeaderContainer>
      <nav>
        <NavigationGameType />
        <NavigationUser />
      </nav>
    </HeaderContainer>
  );
}
