import React, {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {SubNav} from '../../components/SubNav';
import {OverviewProfile} from '../../components/Profile';
import {FriendList} from '../../components/FriendList';
import {ContainerProfile} from './styles';

export function Profile(): ReactElement {
  return (
    <>
      <ContainerProfile>
        <Header />
        <FriendList />
        {/* <SubNav /> */}
        <OverviewProfile />
      </ContainerProfile>
    </>
  );
}
