import React, {ReactElement, ReactNode} from 'react';

import {Container} from './styles';

interface TooltipProps {
  title: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: ReactNode;
}

export function Tooltip({
  title,
  className = '',
  children,
}: TooltipProps): ReactElement {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
