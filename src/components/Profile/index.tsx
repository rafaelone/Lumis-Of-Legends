import React, {ReactElement} from 'react';
// import Banner from '../../assets/images/banner-profile.png';
import BorderPlatinum from '../../assets/images/border-platinum.png';
import IconPlatinum from '../../assets/images/icon-platinum.png';
import IconHonor from '../../assets/images/icon-honor.png';
import IconTrophy from '../../assets/images/icon-trophy.png';
import IconBanner from '../../assets/images/icon-banner-mini.png';
import IconChampionMd from '../../assets/images/icon-champ-md.png';
import IconBannerMastery from '../../assets/images/icon-banner-mastery.png';
import IconMastery from '../../assets/images/icon-mastery-seven.png';
import IconProfile from '../../assets/images/icon-profile.jpg';
import {
  ContainerNameBanner,
  ContainerProfileInfos,
  WrapperProfile,
} from './styles';

export function OverviewProfile(): ReactElement {
  return (
    <>
      <WrapperProfile>
        <ContainerNameBanner>
          <div className="banner">
            <div className="border-ranked">
              <span>Nickname</span>
              <img src={BorderPlatinum} alt="borda-ranked" />
              <img src={IconProfile} alt="ícone-invocador" />
            </div>
          </div>
        </ContainerNameBanner>
        <ContainerProfileInfos>
          <ul>
            <li>
              <span>Solo/duo</span>
              <span>Platinum II</span>
              <img
                className="icon-ranked"
                src={IconPlatinum}
                alt="ícone-ranked"
              />
            </li>
            <li>
              <span>Honor</span>
              <img className="icon-honor" src={IconHonor} alt="ícone-honra" />
            </li>
            <li className="mastery-score">
              <div>
                <span>Mastery score</span>
                <span>120</span>
              </div>
              <div>
                <img
                  className="icon-champ"
                  src={IconChampionMd}
                  alt="ícone-campeão"
                />
                <img
                  className="banner-mastery"
                  src={IconBannerMastery}
                  alt="ícone-bandeira-maestria"
                />
                <img
                  className="icon-mastery"
                  src={IconMastery}
                  alt="ícone-maestria"
                />
              </div>
            </li>
            <li>
              <span>Trophy</span>
              <img className="icon-trophy" src={IconTrophy} alt="icon-trophy" />
            </li>
            <li>
              <span>Banner</span>
              <img className="icon-banner" src={IconBanner} alt="icon-banner" />
            </li>
          </ul>
        </ContainerProfileInfos>
      </WrapperProfile>
    </>
  );
}
