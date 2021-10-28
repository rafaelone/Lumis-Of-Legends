import React, {ReactElement} from 'react';
import {Container} from './styles';

type SubNavItem = {
  title: string;
  handleChange?: () => void;
  active?: boolean;
};

export function SubNavItem({
  title,
  handleChange,
  active,
}: SubNavItem): ReactElement {
  return (
    <Container isActive={active}>
      <button type="button" onClick={handleChange}>
        {title}
      </button>
    </Container>
  );
}
