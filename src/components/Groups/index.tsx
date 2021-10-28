import React, {ReactElement} from 'react';
import {ContainerGroups} from './styles';
import GroupIcon from '../../assets/icons/group.png';

export function Groups(): ReactElement {
  return (
    <ContainerGroups>
      <li>
        <img src={GroupIcon} alt="Ícone de grupos" />
        <div>
          <span className="abreviation">XXXX</span>
          <span className="name">Lumis</span>
        </div>
      </li>
      <li>
        <img src={GroupIcon} alt="Ícone de grupos" />
        <div>
          <span className="abreviation">FT</span>
          <span className="name">Front End</span>
        </div>
      </li>
      <li>
        <img src={GroupIcon} alt="Ícone de grupos" />
        <div>
          <span className="abreviation">BK</span>
          <span className="name">Back End</span>
        </div>
      </li>
    </ContainerGroups>
  );
}
