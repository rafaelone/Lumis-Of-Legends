import React, {ReactElement} from 'react';
import {OverviewContainer} from './styles';

export function OverViewHome(): ReactElement {
  return (
    <OverviewContainer>
      <h1>Lumis of Legends</h1>
      <p>
        Welcome to Lumis of Legends, a clone of League of Legends Client for
        studies using ReactJs and ElectronJS
      </p>
    </OverviewContainer>
  );
}
