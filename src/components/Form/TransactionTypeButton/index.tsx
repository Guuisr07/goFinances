import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export const TransactionTypeButton: React.FC<Props> = ({
  title,
  type,
  isActive,
  ...rest
}) => {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
};
