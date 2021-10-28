import React, {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {MatchHistory} from '../../components/History';
import {SubNav} from '../../components/SubNav';
import {SubNavItem} from '../../components/SubNavItem';

export function History(): ReactElement {
  return (
    <>
      <div>
        <Header />
        <SubNav>
          <SubNavItem title="History" />
        </SubNav>
        <MatchHistory />
      </div>
    </>
  );
}
