import React, {ReactElement} from 'react';
import {UserInformation} from '../UserInformation';
import {Container, Footer, Social} from './styles';

import AddIcon from '../../assets/icons/add.png';
import AddGroupIcon from '../../assets/icons/add-group.png';
import OptionsIcon from '../../assets/icons/options.png';
import FinderIcon from '../../assets/icons/finder.png';
import ChatIcon from '../../assets/icons/chat.png';
import MissionsIcon from '../../assets/icons/missions.png';
import VoiceIcon from '../../assets/icons/voice.png';
import BugIcon from '../../assets/icons/bug.png';
import {Groups} from '../Groups';
import {Friends} from '../Friends';

export function FriendList(): ReactElement {
  return (
    <Container>
      <UserInformation />

      <div className="friend-list">
        <Social>
          <span>Social</span>
          <div>
            <img src={AddIcon} alt="Adicionar amigo" />
            <img src={AddGroupIcon} alt="Adicionar grupo de amigo" />
            <img src={OptionsIcon} alt="Opções" />
            <img src={FinderIcon} alt="Buscar amigo" />
          </div>
        </Social>
        <Groups />
        <Friends />
        <Footer>
          <img src={ChatIcon} alt="Chat" />
          <img src={MissionsIcon} alt="Missões" />
          <img src={VoiceIcon} alt="Voice" />
          <img src={BugIcon} alt="Bug" />
        </Footer>
      </div>
    </Container>
  );
}
