import React, {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import {NavigationType, PointsContainer} from './styles';

import perfilIcon from '../../assets/icons/profile.png';
import collectionIcon from '../../assets/icons/collection.png';
import craftIcon from '../../assets/icons/craft.png';
import shopIcon from '../../assets/icons/shop.png';
import lumisPointsIcon from '../../assets/icons/lumisPoints.png';
import blueEssenceIcon from '../../assets/icons/blue-essence.png';

export function NavigationUser(): ReactElement {
  return (
    <ul>
      <NavigationType>
        <NavLink to="/profile" exact>
          <img src={perfilIcon} alt="perfil" />
        </NavLink>
      </NavigationType>
      <NavigationType className="disabled">
        <a href="/">
          <img src={collectionIcon} alt="coleção" />
        </a>
      </NavigationType>
      <NavigationType className="disabled">
        <a href="/">
          <img src={craftIcon} alt="Crafitar" />
        </a>
      </NavigationType>
      <NavigationType className="disabled" isLast>
        <a href="/">
          <img src={shopIcon} alt="Loja" />
        </a>
      </NavigationType>

      <PointsContainer>
        <div>
          <img src={lumisPointsIcon} alt="Lumis Points" />
          <span>88</span>
        </div>
        <div>
          <img src={blueEssenceIcon} alt="Essencias azuis" />
          <span>10</span>
        </div>
      </PointsContainer>
    </ul>
  );
}
