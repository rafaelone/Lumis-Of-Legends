import React, {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

import PlayButton from '../../assets/images/playButton.svg';
import {GameType} from './styles';

export function NavigationGameType(): ReactElement {
  return (
    <ul>
      <GameType className="button-play-wrapper">
        <img src={PlayButton} alt="Play" className="play-button-shape" />

        <span>Play</span>
      </GameType>
      <GameType className="navigation">
        <NavLink to="/" exact>
          Home
        </NavLink>
      </GameType>
      <GameType className="navigation disabled">
        <a href="/">TFT</a>
      </GameType>
      <GameType className="navigation disabled">
        <a href="/">Clash</a>
      </GameType>
    </ul>
  );
}
