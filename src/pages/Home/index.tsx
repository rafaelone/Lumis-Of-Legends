import React, {ReactElement, useCallback, useState} from 'react';
import {FriendList} from '../../components/FriendList';
import {Header} from '../../components/Header';
import {OverViewHome} from '../../components/OverviewHome';
import {PatchNotes} from '../../components/PatchNotes';
import {SubNav} from '../../components/SubNav';
import {SubNavItem} from '../../components/SubNavItem';
import {useAuth} from '../../hooks/auth';
import {ContainerHome, LogOutContainer} from './styles';

export function Home(): ReactElement {
  const [subNavigation, setSubNavigation] = useState<string>('overview');
  const {signOut} = useAuth();

  const handleChangeSubNavigation = useCallback((title: string) => {
    setSubNavigation(title);
  }, []);

  return (
    <ContainerHome>
      <Header />
      <FriendList />
      <SubNav>
        <SubNavItem
          active={subNavigation === 'overview'}
          title="Overview"
          handleChange={() => handleChangeSubNavigation('overview')}
        />
        <SubNavItem
          active={subNavigation === 'patch'}
          title="Patch Notes"
          handleChange={() => handleChangeSubNavigation('patch')}
        />
      </SubNav>
      {subNavigation === 'overview' && <OverViewHome />}
      {subNavigation === 'patch' && <PatchNotes />}
      <LogOutContainer>
        <button type="button" onClick={signOut}>
          LogOut
        </button>
      </LogOutContainer>
    </ContainerHome>
  );
}
