import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ButtonGradient, ButtonText } from "./styles";

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonGradient>
        <ButtonText>{children}</ButtonText>
      </ButtonGradient>
    </Container>
  );
};

export default Button;
