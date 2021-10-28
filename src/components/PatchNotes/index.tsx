import React, {ReactElement} from 'react';
import {Container} from './styles';

export function PatchNotes(): ReactElement {
  return (
    <Container>
      <h1>Patch 1.0</h1>
      <p className="date">26/10/2021</p>
      <div>
        <p>Welcome to first patch of the project.</p>
        <p>Features developed in this patch</p>
        <p> - Login</p>
        <p> - Profile</p>
      </div>
    </Container>
  );
}
