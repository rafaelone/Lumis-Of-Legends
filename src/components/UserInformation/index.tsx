import React, {ReactElement, useState} from 'react';
import {
  BorderIconPlayer,
  Container,
  IconPlayer,
  IconPlayerContainer,
  Status,
  StatusContainer,
} from './styles';
import PlayerBorder from '../../assets/images/playerBorder.png';
import {useAuth} from '../../hooks/auth';

export function UserInformation(): ReactElement {
  const [online, setOnline] = useState<boolean>(true);
  const {session} = useAuth();

  function handleChangeStatus(): void {
    setOnline(!online);
  }

  return (
    <Container>
      <IconPlayerContainer>
        <BorderIconPlayer src={PlayerBorder} alt="Bordar do jogador" />
        <IconPlayer
          src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon3161.jpg?image=q_auto:best&v=1518361200"
          alt="Ícone do jogador"
        />
        <span>138</span>
      </IconPlayerContainer>

      <StatusContainer>
        <span>{session.firstName}</span>
        <Status isOnline={online}>
          <button type="button" onClick={handleChangeStatus}>
            {online ? 'On-line' : 'Ausente'}
          </button>
        </Status>
      </StatusContainer>
    </Container>
  );
}
